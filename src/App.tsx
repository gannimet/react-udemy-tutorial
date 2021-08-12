import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import './App.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import { rootReducer } from './reducers/rootReducer';

const store = createStore(rootReducer, {
  users: ['Richard', 'Konstantin'],
  fruits: ['apple', 'avocado']
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route component={AboutPage} path="/about" />
        <Route component={HomePage} path="/" />
      </Switch>
    </BrowserRouter>
    </Provider>
  )
};

export default App;
