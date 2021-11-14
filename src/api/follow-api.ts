import { instance, ResponseType } from './';

export const followAPI = {
  followUser(userId: number) {
    return instance.post<ResponseType>(`/follow/${userId}`).then(({ data }) => data);
  },

  unfollowUser(userId: number) {
    return instance.delete<ResponseType>(`/follow/${userId}`).then(({ data }) => data);
  },
};
