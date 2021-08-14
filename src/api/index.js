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
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/${userId}`).then(({ data }) => data);
  },
};
