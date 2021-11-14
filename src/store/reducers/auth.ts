import { ActionsTypes } from '../actions/auth';

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null,
};

type InitialStateType = typeof initialState;

export const auth = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SET_AUTH_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };

    case 'SET_CAPTCHA_URL':
      return {
        ...state,
        captchaUrl: action.payload,
      };

    default:
      return state;
  }
};
