import React from 'react';
import { UserListProps, UserListState } from './interface';
import './style.css';

class UserList extends React.Component<UserListProps, UserListState> {
  render() {
    const { userList } = this.props;

    return (
      <ul>
        {
          userList.map((user) => {
            return (
              <li>
                <img src={user.avatar} alt={`Avatar of ${user.first_name} ${user.last_name}`} />
                <div className="user_info">
                  <div className="user_name">{user.first_name} {user.last_name}</div>
                  <div className="user_email"><a href={`mailto:${user.email}`}>{user.email}</a></div>
                </div>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default UserList;