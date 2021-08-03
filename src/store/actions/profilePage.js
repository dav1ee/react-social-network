import { CREATE_POST, UPDATE_POST_TEXT } from '../reducers/profilePage';

export const createPostAC = () => ({
  type: CREATE_POST,
});

export const updatePostTextAC = (text) => ({
  type: UPDATE_POST_TEXT,
  payload: text,
});
