import { Dispatch } from 'redux';

import { ResultCodes } from '../../api';
import { usersAPI } from '../../api/users-api';
import { followAPI } from '../../api/follow-api';

import { UserType } from '../../types/types';
import { BaseThunkType, InferActionsType } from '../';

export type ActionsTypes = InferActionsType<typeof actionCreators>;
type ThunkType = BaseThunkType<ActionsTypes, void>;

export const fetchUsers =
  (currentPage: number, pageSize: number): ThunkType =>
  (dispatch) => {
    dispatch(actionCreators.setLoading(true));

    usersAPI
      .getUsers(currentPage, pageSize)
      .then((data) => {
        dispatch(actionCreators.setUsers(data.items));
        dispatch(actionCreators.setUsersCount(data.totalCount));
        dispatch(actionCreators.setCurrentPage(currentPage));
      })
      .finally(() => dispatch(actionCreators.setLoading(false)));
  };

const _followUnfollowFlow = (
  dispatch: Dispatch<ActionsTypes>,
  apiMethod: any,
  actionCreator: (userId: number) => ActionsTypes,
  userId: number,
) => {
  dispatch(actionCreators.setFollowButtonDisabled(true, userId));

  apiMethod(userId)
    .then((data: any) => {
      if (data.resultCode === ResultCodes.Success) {
        dispatch(actionCreator(userId));
      }
    })
    .finally(() => dispatch(actionCreators.setFollowButtonDisabled(false, userId)));
};

export const follow =
  (userId: number): ThunkType =>
  (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      followAPI.followUser.bind(followAPI),
      actionCreators.followUser,
      userId,
    );
  };

export const unfollow =
  (userId: number): ThunkType =>
  (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      followAPI.unfollowUser.bind(followAPI),
      actionCreators.unfollowUser,
      userId,
    );
  };

const actionCreators = {
  setUsers: (users: Array<UserType>) =>
    ({
      type: 'SET_USERS',
      payload: users,
    } as const),

  followUser: (userId: number) =>
    ({
      type: 'FOLLOW_USER',
      payload: userId,
    } as const),

  unfollowUser: (userId: number) =>
    ({
      type: 'UNFOLLOW_USER',
      payload: userId,
    } as const),

  setCurrentPage: (pageNum: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      payload: pageNum,
    } as const),

  setUsersCount: (totalCount: number) =>
    ({
      type: 'SET_USERS_COUNT',
      payload: totalCount,
    } as const),

  setLoading: (bool: boolean) =>
    ({
      type: 'SET_LOADING',
      payload: bool,
    } as const),

  setFollowButtonDisabled: (bool: boolean, userId: number) =>
    ({
      type: 'SET_FOLLOW_BUTTON_DISABLED',
      payload: { bool, userId },
    } as const),
};
