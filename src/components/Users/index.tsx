import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { rootReducer } from '../../reducers/rootReducer';
import { UsersDispatchProps, UsersOwnProps, UsersProps, UsersStateProps } from './interface';

class Users extends React.Component<UsersProps> {
  handleAddUsers = () => {
    this.props.addUsers(['thomas', 'kerstin']);
  }

  render() {
    const { ownerName, users } = this.props;

    return (
      <div>
        <h1>Owner: {ownerName}</h1>
        <h1>Users</h1>
        <ul>
          {users.map((fruit) => <li key={fruit}>{fruit}</li>)}
        </ul>

        <button onClick={this.handleAddUsers}>Add users</button>
      </div>
    )
  }
}

const mapStateToProps: MapStateToProps<UsersStateProps, UsersOwnProps, ReturnType<typeof rootReducer>> = (state, ownProps) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<UsersDispatchProps, UsersOwnProps> = (dispatch, ownProps) => {
  return {
    addUsers: (users) => dispatch({ type: 'ADD_USERS', users }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);