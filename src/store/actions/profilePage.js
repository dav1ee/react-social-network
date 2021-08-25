import {
  CREATE_POST,
  UPDATE_POST_TEXT,
  SET_USER_PROFILE,
  SET_USER_STATUS,
} from '../reducers/profilePage';

import { profileAPI } from '../../api';

export const fetchUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((data) => dispatch(setUserProfile(data)));
};

export const fetchUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => dispatch(setUserStatus(data)));
};

export const updateUserStatus = (text) => (dispatch) => {
  profileAPI.updateStatus(text).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(text));
    }
  });
};

export const createPost = () => ({
  type: CREATE_POST,
});

export const updatePostText = (text) => ({
  type: UPDATE_POST_TEXT,
  payload: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  payload: status,
});
