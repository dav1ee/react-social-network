import { INITIALIZED_SUCCESS } from '../reducers/app';
import { fetchAuthUserData } from '../actions/auth';

export const appInitialize = () => (dispatch) => {
  const promise = dispatch(fetchAuthUserData());

  Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
