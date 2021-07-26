import React from 'react';
import { MyContext } from '../../context/MyContext';
import UserInput from '../UserInput/index';
import { HomePageProps, HomePageState } from './interface';

class HomePage extends React.Component<HomePageProps, HomePageState> {
  static contextType = MyContext;
  context!: React.ContextType<typeof MyContext>;

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          {this.context.users.map((user) => <li>{user}</li>)}
        </ul>
        <button onClick={() => this.context.addUser('Bela')}>Add User</button>
        <UserInput />
      </div>
    )
  }
}

export default HomePage;