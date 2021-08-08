import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import SpecialLink from './components/SpecialLink';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ul>
        <li><Link component={SpecialLink} to="/home">Home</Link></li>
        <li><Link component={SpecialLink} to="/about">About</Link></li>
        <li><Link component={SpecialLink} to="/profile">Profile</Link></li>
      </ul>

      <Switch>
        <Route component={AboutPage} path="/about" />
        <Route component={HomePage} path="/home" />
        <Route component={ProfilePage} path="/profile" />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
