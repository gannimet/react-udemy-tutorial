import { combineReducers } from 'redux';
import { fruitsReducer } from './fruitsReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  fruits: fruitsReducer,
  users: usersReducer,
});