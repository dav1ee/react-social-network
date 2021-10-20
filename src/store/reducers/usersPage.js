import { updateObjectInArray } from '../../utils/objectHelpers';

export const SET_USERS = 'SET_USERS';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_USERS_COUNT = 'SET_USERS_COUNT';
export const SET_LOADING = 'SET_LOADING';
export const SET_FOLLOW_BUTTON_DISABLED = 'SET_FOLLOW_BUTTON_DISABLED';

const initialState = {
  users: [],
  pageSize: 4,
  usersCount: 0,
  currentPage: 1,
  isLoading: false,
  followButtonDisabled: [],
};

export const usersPage = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case FOLLOW_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', { followed: true }),
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', { followed: false }),
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_USERS_COUNT:
      return {
        ...state,
        usersCount: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_FOLLOW_BUTTON_DISABLED:
      return {
        ...state,
        followButtonDisabled: action.payload.bool
          ? [...state.followButtonDisabled, action.payload.userId]
          : state.followButtonDisabled.filter((id) => id !== action.payload.userId),
      };

    default:
      return state;
  }
};
