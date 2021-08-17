import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './App.css';
import HomePage from './components/HomePage';
import { rootReducer } from './store/reducers/rootReducer';

const store = createStore(rootReducer, {
  notes: [],
}, composeWithDevTools());

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  )
};

export default App;
