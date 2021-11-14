import { fetchAuthUserData } from '../actions/auth';
import { InferActionsType } from '../';

export type ActionsType = InferActionsType<typeof actionCreators>;

export const appInitialize = () => (dispatch: any) => {
  const promise = dispatch(fetchAuthUserData());

  Promise.all([promise]).then(() => dispatch(actionCreators.initializedSuccess()));
};

const actionCreators = {
  initializedSuccess: () =>
    ({
      type: 'INITIALIZED_SUCCESS',
    } as const),
};
