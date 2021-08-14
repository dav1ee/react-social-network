import {
  SET_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_CURRENT_PAGE,
  SET_USERS_COUNT,
  SET_LOADING,
  SET_FOLLOW_BUTTON_DISABLED,
} from '../reducers/usersPage';

import { usersAPI, followAPI } from '../../api';

export const fetchUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setLoading(true));

  usersAPI
    .getUsers(currentPage, pageSize)
    .then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
      dispatch(setCurrentPage(currentPage));
    })
    .finally(() => dispatch(setLoading(false)));
};

export const follow = (userId) => (dispatch) => {
  dispatch(setFollowButtonDisabled(true, userId));

  followAPI
    .followUser(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(followUser(userId));
      }
    })
    .finally(() => dispatch(setFollowButtonDisabled(false, userId)));
};

export const unfollow = (userId) => (dispatch) => {
  dispatch(setFollowButtonDisabled(true, userId));

  followAPI
    .unfollowUser(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowUser(userId));
      }
    })
    .finally(() => dispatch(setFollowButtonDisabled(false, userId)));
};

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

export const setFollowButtonDisabled = (bool, userId) => ({
  type: SET_FOLLOW_BUTTON_DISABLED,
  payload: { bool, userId },
});
