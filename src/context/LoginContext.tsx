import React from 'react';

export interface LoginContextType {
  isLoggedIn: boolean;
  setLoginStatus(isLoggedIn: boolean): void;
}

export const LoginContext = React.createContext<LoginContextType>({
  isLoggedIn: false,
  setLoginStatus: () => {}
});

interface LoginContextProviderState {
  isLoggedIn: boolean;
}

class LoginContextProvider extends React.Component<{}, LoginContextProviderState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleSetLoginStatus = (isLoggedIn: boolean) => {
    this.setState({
      isLoggedIn,
    })

    window.localStorage.setItem('loggedIn', isLoggedIn ? 'true' : 'false')
  }

  render() {
    const isLoggedIn = window.localStorage.getItem('loggedIn') === 'true';

    return (
      <LoginContext.Provider value={{
        isLoggedIn,
        setLoginStatus: this.handleSetLoginStatus,
      }}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}

export default LoginContextProvider;