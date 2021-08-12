import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore, Middleware } from 'redux';
import './App.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import { rootReducer } from './store/reducers/rootReducer';

const anotherMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('Current action:', action);
  next(action);
};

const customMiddleware: Middleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    next(action(store));
  } else {
    next(action);
  }
};

const store = createStore(rootReducer, {
  users: ['Richard', 'Konstantin'],
  fruits: ['apple', 'avocado']
}, applyMiddleware(customMiddleware, anotherMiddleware));

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
