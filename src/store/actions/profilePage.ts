import { stopSubmit } from 'redux-form';

import { ResultCodes } from '../../api';
import { profileAPI } from '../../api/profile-api';

import { ProfileType, PhotosType } from '../../types/types';
import { BaseThunkType, InferActionsType } from '../';

export type ActionsTypes = InferActionsType<typeof actionCreators>;
type ThunkType = BaseThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>;

export const fetchUserProfile =
  (userId: number | null): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actionCreators.setUserProfile(data));
  };

export const fetchUserStatus =
  (userId: number): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(actionCreators.setUserStatus(data));
  };

export const updateUserStatus =
  (text: string): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.updateStatus(text);
    if (data.resultCode === ResultCodes.Success) {
      dispatch(actionCreators.setUserStatus(text));
    }
  };

export const savePhoto =
  (file: File): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.savePhoto(file);

    if (data.resultCode === ResultCodes.Success) {
      dispatch(actionCreators.savePhotoSuccess(data.data.photos));
    }
  };

export const saveProfile =
  (profile: ProfileType): ThunkType =>
  async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if (data.resultCode === ResultCodes.Success) {
      if (userId !== null) {
        dispatch(fetchUserProfile(userId));
      } else {
        throw new Error('User ID cannot be null.');
      }
    } else {
      dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }));
      return Promise.reject(data.messages[0]);
    }
  };

export const actionCreators = {
  createPost: (postText: string) =>
    ({
      type: 'CREATE_POST',
      payload: postText,
    } as const),

  setUserProfile: (profile: ProfileType) =>
    ({
      type: 'SET_USER_PROFILE',
      payload: profile,
    } as const),

  setUserStatus: (status: string) =>
    ({
      type: 'SET_USER_STATUS',
      payload: status,
    } as const),

  deletePost: (postId: number) =>
    ({
      type: 'DELETE_POST',
      payload: postId,
    } as const),

  savePhotoSuccess: (photos: PhotosType) =>
    ({
      type: 'SAVE_PHOTO_SUCCESS',
      payload: photos,
    } as const),
};
