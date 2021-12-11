import { Dispatch } from 'redux';

import { ResultCodes, ResponseType } from '../../api';
import { usersAPI } from '../../api/users-api';
import { followAPI } from '../../api/follow-api';

import { UserType } from '../../types/types';
import { FilterType } from '../reducers/usersPage';
import { BaseThunkType, InferActionsType } from '../';

export type ActionsTypes = InferActionsType<typeof actionCreators>;
type ThunkType = BaseThunkType<ActionsTypes, void>;

export const fetchUsers =
  (currentPage: number, pageSize: number, filter: FilterType): ThunkType =>
  async (dispatch) => {
    dispatch(actionCreators.setLoading(true));
    dispatch(actionCreators.setCurrentPage(currentPage));
    dispatch(actionCreators.setFilter(filter));

    const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend);

    dispatch(actionCreators.setLoading(false));
    dispatch(actionCreators.setUsers(data.items));
    dispatch(actionCreators.setUsersCount(data.totalCount));
  };

const _followUnfollowFlow = async (
  dispatch: Dispatch<ActionsTypes>,
  apiMethod: (userId: number) => Promise<ResponseType>,
  actionCreator: (userId: number) => ActionsTypes,
  userId: number,
) => {
  dispatch(actionCreators.setFollowButtonDisabled(true, userId));

  const data = await apiMethod(userId);

  if (data.resultCode === ResultCodes.Success) {
    dispatch(actionCreator(userId));
  }

  dispatch(actionCreators.setFollowButtonDisabled(false, userId));
};

export const follow =
  (userId: number): ThunkType =>
  async (dispatch) => {
    await _followUnfollowFlow(
      dispatch,
      followAPI.followUser.bind(followAPI),
      actionCreators.followUser,
      userId,
    );
  };

export const unfollow =
  (userId: number): ThunkType =>
  async (dispatch) => {
    await _followUnfollowFlow(
      dispatch,
      followAPI.unfollowUser.bind(followAPI),
      actionCreators.unfollowUser,
      userId,
    );
  };

export const actionCreators = {
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

  setFilter: (filter: FilterType) =>
    ({
      type: 'SET_FILTER',
      payload: filter,
    } as const),
};
