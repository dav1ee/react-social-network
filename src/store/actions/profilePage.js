import { stopSubmit } from 'redux-form';

import {
  CREATE_POST,
  SET_USER_PROFILE,
  SET_USER_STATUS,
  DELETE_POST,
  SAVE_PHOTO_SUCCESS,
} from '../reducers/profilePage';

import { profileAPI } from '../../api';

export const fetchUserProfile = (userId) => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const fetchUserStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(data));
};

export const updateUserStatus = (text) => async (dispatch) => {
  const response = await profileAPI.updateStatus(text);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(text));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(fetchUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export const createPost = (postText) => ({
  type: CREATE_POST,
  payload: postText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  payload: status,
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  payload: photos,
});
