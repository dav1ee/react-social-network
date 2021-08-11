import { SET_AUTH_USER_DATA } from '../reducers/auth';

export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login },
});
