import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import Button from './components/Button';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import LoginContextProvider, { LoginContext, LoginContextType } from './context/LoginContext';

class App extends React.Component {
  handleLogout = (context: LoginContextType) => {
    context.setLoginStatus(false);
  }

  render() {
    return (
      <LoginContextProvider>
        <LoginContext.Consumer>
          {(context) => {
            const { isLoggedIn } = context;

            return (
              <BrowserRouter>
                {isLoggedIn && <Header />}

                <Switch>
                  {isLoggedIn && <Route exact component={HomePage} path="/" />}
                  {isLoggedIn && <Route component={AboutPage} path="/about" />}
                  {!isLoggedIn && <Route component={LoginPage} path="/login" />}
                  <Redirect to={isLoggedIn ? '/' : '/login'} />
                </Switch>

                {isLoggedIn && <Button onClick={() => this.handleLogout(context)}>Log Out</Button>}
              </BrowserRouter>
            )
          }}
        </LoginContext.Consumer>
      </LoginContextProvider>
    )
  }
}

export default App;
