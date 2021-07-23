import React from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed';
import Profile from './components/Profile';

export const App: React.FC = () => {
  return (
    <>
      <h1>My App</h1>
      <Profile ownerName="Richard" />
      <NewsFeed />
    </>
  );
}

export default App;
