import React from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent/index';
import SuperComponent from './components/SuperComponent';

const App: React.FC = () => {
  return (
    <>
      <SuperComponent />
      <ClassComponent />
    </>
  )
};

export default App;
