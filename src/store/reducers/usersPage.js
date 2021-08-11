export const SET_USERS = 'SET_USERS';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_USERS_COUNT = 'SET_USERS_COUNT';
export const SET_LOADING = 'SET_LOADING';

const initialState = {
  users: [],
  pageSize: 4,
  usersCount: 0,
  currentPage: 1,
  isLoading: false,
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
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, followed: true } : user,
        ),
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, followed: false } : user,
        ),
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_USERS_COUNT:
      return {
        ...state,
        usersCount: action.payload / 350,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
