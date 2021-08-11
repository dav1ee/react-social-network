import { CREATE_POST, UPDATE_POST_TEXT, SET_USER_PROFILE } from '../reducers/profilePage';

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
