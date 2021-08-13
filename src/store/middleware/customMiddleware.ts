import { AnyAction, Middleware, Store } from 'redux';
import { StoreStateType } from '../reducers/rootReducer';

export type CustomMiddlewareFunction<S, R> = (store: Store<S>) => R;

export interface CustomDispatch<S, R> {
  <T>(action: T): T;
  (param: CustomMiddlewareFunction<S, R>): any;
}

export const customMiddleware: Middleware<{}, StoreStateType, CustomDispatch<StoreStateType, AnyAction>> = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    next(action(store));
  } else {
    next(action);
  }
};