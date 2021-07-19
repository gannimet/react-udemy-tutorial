import React from 'react';
import './App.css';
import UserManagement from './components/UserManagement/index';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>User Management</h1>
        <UserManagement minCount={1} maxCount={10} />
      </>
    )
  }
}

export default App;
