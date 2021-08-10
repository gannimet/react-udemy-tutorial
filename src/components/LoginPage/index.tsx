import React from 'react';
import { LoginContext, LoginContextType } from '../../context/LoginContext';
import Button from '../Button';
import Input from '../Input';
import { LoginPageProps, LoginPageState } from './interface';

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  constructor(props: LoginPageProps) {
    super(props);

    this.state = {
      hasError: false,
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: event.currentTarget.value
    })
  }

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: event.currentTarget.value
    })
  }

  handleLoginClick = (context: LoginContextType) => {
    context.setLoginStatus(true);
  }

  render() {
    const { hasError } = this.state;

    return (
      <LoginContext.Consumer>
        {(context) => (
          <>
            <h1>Login Page</h1>

            <div className="login-form">
              <Input
                label="Username"
                onChange={this.handleUsernameChange}
                hasError={hasError} />

              <Input
                label="Password"
                onChange={this.handlePasswordChange}
                hasError={hasError} />

              <Button onClick={() => this.handleLoginClick(context)}>Log In</Button>
            </div>
          </>
        )}
      </LoginContext.Consumer>
    )
  }
}

export default LoginPage;