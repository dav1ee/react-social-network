import { instance } from './';
import { UserType } from '../types/types';

type GetUsersResponseType = {
  items: Array<UserType>;
  totalCount: number;
  error: null | string;
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 4) {
    return instance
      .get<GetUsersResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
      .then(({ data }) => data);
  },
};
