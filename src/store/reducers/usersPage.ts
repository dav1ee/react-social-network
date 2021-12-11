import { updateObjectInArray } from '../../utils/objectHelpers';
import { UserType } from '../../types/types';
import { ActionsTypes } from '../actions/usersPage';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 4,
  usersCount: 0,
  currentPage: 1,
  isLoading: false,
  followButtonDisabled: [] as Array<number>,
  filter: {
    term: '',
    friend: null as null | boolean,
  },
};

export type InitialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;

export const usersPage = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      };

    case 'FOLLOW_USER':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', { followed: true }),
      };

    case 'UNFOLLOW_USER':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', { followed: false }),
      };

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };

    case 'SET_USERS_COUNT':
      return {
        ...state,
        usersCount: action.payload,
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };

    case 'SET_FOLLOW_BUTTON_DISABLED':
      return {
        ...state,
        followButtonDisabled: action.payload.bool
          ? [...state.followButtonDisabled, action.payload.userId]
          : state.followButtonDisabled.filter((id) => id !== action.payload.userId),
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
