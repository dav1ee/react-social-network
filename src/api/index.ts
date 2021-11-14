import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  headers: { 'API-KEY': '50c9d4f3-03c2-4359-ae16-5b9034edbf9f' },
  withCredentials: true,
});

export type ResponseType<D = {}, RC = ResultCodes> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};

export enum ResultCodes {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}
