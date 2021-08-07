import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact component={AboutPage} path="/:username/about" />
        <Route exact component={HomePage} path="/" />
      </Switch>
    </Router>
  )
};

export default App;
