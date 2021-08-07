import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={AboutPage} path="/:username/about" />
        <Route render={(routeProps) => <HomePage {...routeProps} />} path="/home" />
        <Route children={(routeProps) => routeProps.match ? <HomePage {...routeProps} /> : <div>Does not match</div>} path="/" />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
