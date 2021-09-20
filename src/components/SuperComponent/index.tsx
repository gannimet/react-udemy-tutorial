import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const SuperComponent: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="App">
      <h1>Super Component</h1>
      <p>Theme: {theme}</p>
    </div>
  )
};

export default SuperComponent;