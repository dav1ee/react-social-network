import { instance } from './';
import { UserType } from '../types/types';

type GetUsersResponseType = {
  items: Array<UserType>;
  totalCount: number;
  error: null | string;
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 1, term = '', friend: null | boolean = null) {
    return instance
      .get<GetUsersResponseType>(
        `/users?page=${currentPage}&count=${pageSize}&term=${term}` +
          (friend === null ? '' : `&friend=${friend}`),
      )
      .then(({ data }) => data);
  },
};
