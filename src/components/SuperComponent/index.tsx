import React, { ChangeEvent, useReducer } from 'react';
import { userReducer } from './reducer';

const SuperComponent: React.FC = () => {
  const [userState, dispatch] = useReducer(userReducer, { users: [], newUserName: '' });
  const { users, newUserName } = userState;

  const handleAddUser = () => {
    dispatch({
      type: 'add',
    });
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'changeNewName',
      payload: event.currentTarget.value,
    });
  };

  return (
    <div className="App">
      <h1>Super Component</h1>
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>

      <input value={newUserName} onChange={handleNameChange} />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  )
};

export default SuperComponent;