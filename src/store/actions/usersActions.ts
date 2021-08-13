import { Store } from 'redux';
import { StoreStateType } from '../reducers/rootReducer';
import { UsersReducerAction } from '../reducers/usersReducer';

class UsersActions {
  static ADD_USERS = 'ADD_USERS';

  addUsers = (users: string[]) => (store: Store<StoreStateType, UsersReducerAction>): UsersReducerAction => {
    console.log('users state:', store.getState().users);
    return {
      type: UsersActions.ADD_USERS,
      users,
    };
  }
}

export default UsersActions;