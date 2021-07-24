import React from 'react';
import './App.css';
import PersonNames from './components/PersonNames';
import PersonPictures from './components/PersonPictures';

export const App: React.FC = () => {
  return (
    <>
      <h1>My App</h1>
      <PersonPictures />
      <PersonNames />
    </>
  );
}

export default App;
