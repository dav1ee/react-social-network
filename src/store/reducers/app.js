export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  isInitialized: false,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };

    default:
      return state;
  }
};
