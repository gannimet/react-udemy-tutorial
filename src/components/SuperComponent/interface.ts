export interface User {
  id: number;
  name: string;
}

export interface UserState {
  users: User[];
  newUserName: string;
}

export type UserReducerAction = UserAddAction | UserChangeNameAction;

export interface UserAddAction {
  type: 'add';
}

export interface UserChangeNameAction {
  type: 'changeNewName',
  payload: string;
}