import { AnyAction, Middleware, Store } from 'redux';
import { createSelector } from 'reselect';
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

export const fruitsWithO = createSelector<StoreStateType, string[], string[]>(
  (state) => state.fruits,
  (fruits) => {
    return fruits.filter((fruit) => fruit.toLowerCase().includes('o'));
  }
);