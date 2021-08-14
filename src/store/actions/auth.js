import { SET_AUTH_USER_DATA } from '../reducers/auth';

import { authAPI } from '../../api';

export const fetchAuthUserData = () => (dispatch) => {
  authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login },
});
