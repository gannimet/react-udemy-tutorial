import axios from 'axios';
import React from 'react';
import { Button } from '../Button/index';
import UserList from '../UserList/index';
import { UserData, UserManagementProps, UserManagementState } from './interface';
import './style.css';

class UserManagement extends React.Component<UserManagementProps, UserManagementState> {
  constructor(props: UserManagementProps) {
    super(props);

    this.state = {
      userData: [],
      displayCount: props.minCount,
    };
  }

  handleAddClick = () => {
    this.setState({
      displayCount: Math.min(this.state.displayCount + 1, this.props.maxCount)
    });
  };

  handleRemoveClick = () => {
    this.setState({
      displayCount: Math.max(this.state.displayCount - 1, this.props.minCount)
    });
  };

  fetchMissingUsers = () => {
    const userPromises = [];

    for (let i = this.props.minCount; i <= this.state.displayCount; i++) {
      const cachedUser = this.state.userData.find((user) => user.id === i);

      if (!cachedUser) {
        userPromises.push(axios.get(`https://reqres.in/api/users/${i}`));
      }
    }

    if (userPromises.length === 0) {
      return;
    }

    Promise.all(userPromises).then(
      (responses) => {
        const fetchedUsers = responses.map((response) => response.data.data) as UserData[];
        const newUserList = [...this.state.userData, ...fetchedUsers].sort((u1, u2) => {
          return u1.id - u2.id;
        });

        this.setState({
          userData: newUserList,
        });
      }
    );
  };

  componentDidMount() {
    this.fetchMissingUsers();
  }

  componentDidUpdate(_: UserManagementProps, prevState: UserManagementState) {
    if (this.state.displayCount > prevState.displayCount) {
      this.fetchMissingUsers();
    }
  }

  render() {
    const { userData, displayCount } = this.state;
    const { minCount, maxCount } = this.props;

    return (
      <>
        <UserList userList={userData.slice(0, displayCount)} />
        <div className="button-row">
          <Button disabled={displayCount >= maxCount} type="primary" onClick={this.handleAddClick}>Add</Button>
          <Button disabled={displayCount <= minCount} type="default" onClick={this.handleRemoveClick}>Remove</Button>
        </div>
      </>
    );
  }
}

export default UserManagement;