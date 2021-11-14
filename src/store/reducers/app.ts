import { ActionsType } from '../actions/app';

const initialState = {
  isInitialized: false,
};

type InitialStateType = typeof initialState;

export const app = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        isInitialized: true,
      };

    default:
      return state;
  }
};
