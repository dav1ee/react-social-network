import { createStore, applyMiddleware, compose, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { rootReducer } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type GlobalState = ReturnType<RootReducerType>;

type RootReducerType = typeof rootReducer;

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U }
  ? U
  : never;

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<
  R,
  GlobalState,
  unknown,
  A
>;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
