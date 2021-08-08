import { SET_USERS, FOLLOW_USER, UNFOLLOW_USER } from '../reducers/usersPage';

export const setUsersAC = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const followUserAC = (userId) => ({
  type: FOLLOW_USER,
  payload: userId,
});

export const unfollowUserAC = (userId) => ({
  type: UNFOLLOW_USER,
  payload: userId,
});
