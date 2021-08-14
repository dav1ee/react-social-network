import { CREATE_POST, UPDATE_POST_TEXT, SET_USER_PROFILE } from '../reducers/profilePage';

import { profileAPI } from '../../api';

export const fetchUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((data) => dispatch(setUserProfile(data)));
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
