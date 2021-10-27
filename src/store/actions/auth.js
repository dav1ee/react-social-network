import { stopSubmit } from 'redux-form';

import { SET_AUTH_USER_DATA, SET_CAPTCHA_URL } from '../reducers/auth';
import { authAPI, securityAPI } from '../../api';

export const fetchAuthUserData = () => async (dispatch) => {
  const data = await authAPI.me();

  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);

  if (data.resultCode === 0) {
    dispatch(fetchAuthUserData());
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }

    const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();

  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();

  dispatch(setCaptchaUrl(data.url));
};

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth },
});

const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  payload: captchaUrl,
});
