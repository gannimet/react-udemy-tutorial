import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import UsersActions from '../../store/actions/usersActions';
import { CustomDispatch } from '../../store/middleware/customMiddleware';
import { rootReducer, StoreStateType } from '../../store/reducers/rootReducer';
import { UsersReducerAction } from '../../store/reducers/usersReducer';
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

const mapDispatchToProps = (dispatch: CustomDispatch<StoreStateType, UsersReducerAction>, ownProps: UsersOwnProps): UsersDispatchProps => {
  const usersActions = new UsersActions();

  return {
    addUsers: (users) => dispatch(usersActions.addUsers(users)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);