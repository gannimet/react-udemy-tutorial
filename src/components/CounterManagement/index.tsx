import axios from 'axios';
import React from 'react';
import { CounterManagementProps, CounterManagementState, UserData } from './interface';

class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {
  constructor(props: CounterManagementProps) {
    super(props);

    this.state = {
      user: 1,
      userData: undefined,
    };
  }

  handleAddClick = () => {
    this.setState({
      user: this.state.user + 1
    })
  }

  handleSubtractClick = () => {
    this.setState({
      user: this.state.user - 1
    })
  }

  fetchUserData = () => {
    axios.get(`https://reqres.in/api/users/${this.state.user}`).then(
      (response) => {
        const userData = response.data.data as UserData;

        this.setState({
          userData,
        });
      }
    );
  };

  componentDidMount() {
    this.fetchUserData();
  }
  
  componentDidUpdate(prevProps: CounterManagementProps, prevState: CounterManagementState, snapshot: any) {
    console.log('componentDidUpdate, snapshot:', snapshot);
    if (this.state.user !== prevState.user) {
      this.fetchUserData();
    }
  }
  
  render() {
    console.log('render');
    const { ownerName } = this.props;
    const { userData } = this.state;

    return (
      <div>
        <h1>Counter Management</h1>
        <h2>Owner Name: {ownerName}</h2>
        <button onClick={this.handleAddClick}>Add</button>
        <button onClick={this.handleSubtractClick}>Subtract</button>

        {userData && <div>{userData.first_name} {userData.last_name} ({userData.email})</div>}
      </div>
    )
  }
}

export default CounterManagement;