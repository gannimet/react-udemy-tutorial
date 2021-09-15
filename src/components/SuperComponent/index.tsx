import React, { useState } from 'react';

const expensiveCalculateInitialValue = () => {
  console.log('calcilate initial state');
  return 0;
};

const SuperComponent: React.FC = () => {
  const [counter, setCounter] = useState(() => expensiveCalculateInitialValue());

  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick={handleButtonClick}>Add Value</button>
    </div>
  )
};

export default SuperComponent;