import { instance, ResultCodes, ResultCodeForCaptcha, ResponseType } from './';

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};

type LoginResponseDataType = { userId: number };

export const authAPI = {
  me() {
    return instance.get<ResponseType<MeResponseDataType>>('/auth/me').then(({ data }) => data);
  },

  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance
      .post<ResponseType<LoginResponseDataType, ResultCodes | ResultCodeForCaptcha>>(
        '/auth/login',
        {
          email,
          password,
          rememberMe,
          captcha,
        },
      )
      .then(({ data }) => data);
  },

  logout() {
    return instance.delete<ResponseType>('/auth/login').then(({ data }) => data);
  },
};
