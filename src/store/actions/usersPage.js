import {
  SET_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_CURRENT_PAGE,
  SET_USERS_COUNT,
  SET_LOADING,
} from '../reducers/usersPage';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const followUser = (userId) => ({
  type: FOLLOW_USER,
  payload: userId,
});

export const unfollowUser = (userId) => ({
  type: UNFOLLOW_USER,
  payload: userId,
});

export const setCurrentPage = (pageNum) => ({
  type: SET_CURRENT_PAGE,
  payload: pageNum,
});

export const setUsersCount = (totalCount) => ({
  type: SET_USERS_COUNT,
  payload: totalCount,
});

export const setLoading = (bool) => ({
  type: SET_LOADING,
  payload: bool,
});
