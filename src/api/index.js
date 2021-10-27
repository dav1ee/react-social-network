import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: { 'API-KEY': '50c9d4f3-03c2-4359-ae16-5b9034edbf9f' },
  withCredentials: true,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 4) {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(({ data }) => data);
  },
};

export const followAPI = {
  followUser(userId) {
    return instance.post(`/follow/${userId}`).then(({ data }) => data);
  },

  unfollowUser(userId) {
    return instance.delete(`/follow/${userId}`).then(({ data }) => data);
  },
};

export const authAPI = {
  me() {
    return instance.get('/auth/me').then(({ data }) => data);
  },

  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post('/auth/login', { email, password, rememberMe, captcha })
      .then(({ data }) => data);
  },

  logout() {
    return instance.delete('/auth/login').then(({ data }) => data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/${userId}`).then(({ data }) => data);
  },

  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`).then(({ data }) => data);
  },

  updateStatus(text) {
    return instance.put(`/profile/status`, { status: text });
  },

  savePhoto(file) {
    const formData = new FormData();
    formData.append('image', file);

    return instance.put(`/profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  saveProfile(profile) {
    return instance.put(`/profile`, profile);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('/security/get-captcha-url').then(({ data }) => data);
  },
};
