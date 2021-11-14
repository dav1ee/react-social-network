import { stopSubmit } from 'redux-form';

import { ResultCodeForCaptcha } from '../../api';
import { authAPI } from '../../api/auth-api';
import { securityAPI } from '../../api/security-api';
import { ResultCodes } from '../../api';

import { BaseThunkType, InferActionsType } from '../';

export type ActionsTypes = InferActionsType<typeof actionCreators>;
type ThunkType = BaseThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>;

export const fetchAuthUserData = (): ThunkType => async (dispatch) => {
  const data = await authAPI.me();

  if (data.resultCode === ResultCodes.Success) {
    const { id, email, login } = data.data;
    dispatch(actionCreators.setAuthUserData(id, email, login, true));
  }
};

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null | undefined | string,
  ): ThunkType =>
  async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === ResultCodes.Success) {
      dispatch(fetchAuthUserData());
    } else {
      if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }

      const message = data.messages.length > 0 ? data.messages[0] : 'Some error';
      dispatch(stopSubmit('login', { _error: message }));
    }
  };

export const logout = (): ThunkType => async (dispatch) => {
  const data = await authAPI.logout();

  if (data.resultCode === ResultCodes.Success) {
    dispatch(actionCreators.setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();

  dispatch(actionCreators.setCaptchaUrl(data.url));
};

const actionCreators = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
  ) =>
    ({
      type: 'SET_AUTH_USER_DATA',
      payload: { userId, email, login, isAuth },
    } as const),

  setCaptchaUrl: (captchaUrl: string) =>
    ({
      type: 'SET_CAPTCHA_URL',
      payload: captchaUrl,
    } as const),
};
