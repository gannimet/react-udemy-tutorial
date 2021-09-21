import { Reducer } from 'react';
import { UserReducerAction, UserState } from './interface';

export const userReducer: Reducer<UserState, UserReducerAction> = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        users: [
          ...state.users,
          {
            id: state.users.length + 1,
            name: state.newUserName,
          },
        ],
        newUserName: '',
      };
    case 'changeNewName':
      return {
        ...state,
        newUserName: action.payload,
      };
    default:
      throw new Error('Action type does not exist');
  }
};