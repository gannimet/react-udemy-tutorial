import React from 'react';
import './App.css';
import SuperComponent from './components/SuperComponent';
import { ThemeContext } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <div>
      <ThemeContext.Provider value="dark">
        <SuperComponent />
      </ThemeContext.Provider>
    </div>
  )
};

export default App;
