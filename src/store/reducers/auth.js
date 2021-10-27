export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
export const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.payload,
      };

    default:
      return state;
  }
};
