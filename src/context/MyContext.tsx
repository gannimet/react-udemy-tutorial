import React from 'react';

export interface MyContextType {
  users: string[];
  addUser(user: string): any;
}

export const MyContext = React.createContext<MyContextType>({
  users: ['Hannah', 'Emely'],
  addUser: () => {},
});

interface MyContextProviderState {
  users: string[];
}

export class MyContextProvider extends React.Component<{}, MyContextProviderState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      users: ['Hannah', 'Emely']
    };
  }

  handleAddUser = (user: string) => {
    this.setState({
      users: [...this.state.users, user],
    })
  }

  render() {
    return (
      <MyContext.Provider value={{
        users: this.state.users,
        addUser: this.handleAddUser,
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}