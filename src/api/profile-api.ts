import { instance, ResponseType } from './';
import { ProfileType, PhotosType } from '../types/types';

export const profileAPI = {
  getProfile(userId: number | null) {
    return instance.get<ProfileType>(`/profile/${userId}`).then(({ data }) => data);
  },

  getStatus(userId: number) {
    return instance.get<string>(`/profile/status/${userId}`).then(({ data }) => data);
  },

  updateStatus(text: string) {
    return instance.put<ResponseType>(`/profile/status`, { status: text }).then(({ data }) => data);
  },

  savePhoto(file: File) {
    const formData = new FormData();
    formData.append('image', file);

    return instance
      .put<ResponseType<{ photos: PhotosType }>>(`/profile/photo`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(({ data }) => data);
  },

  saveProfile(profile: ProfileType) {
    return instance.put<ResponseType>(`/profile`, profile).then(({ data }) => data);
  },
};
