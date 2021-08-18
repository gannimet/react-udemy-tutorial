import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import { anotherMiddleware } from './store/middleware/anotherMiddleware';
import { customMiddleware } from './store/middleware/customMiddleware';
import { rootReducer } from './store/reducers/rootReducer';

const store = createStore(
  rootReducer,
  (window as any).initialState,
  composeWithDevTools(applyMiddleware(customMiddleware, anotherMiddleware))
);

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
