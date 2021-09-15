import React, { useEffect, useState } from 'react';

const expensiveCalculateInitialValue = () => {
  console.log('calcilate initial state');
  return 0;
};

const SuperComponent: React.FC = () => {
  const [counter, setCounter] = useState(() => expensiveCalculateInitialValue());
  const [otherValue, setOtherValue] = useState(0);

  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log('UseEffect triggered');
  });

  useEffect(() => {
    console.log('Component did mount');
  }, []);

  useEffect(() => {
    console.log('Other value has changed');
  }, [otherValue]);

  useEffect(() => {
    console.log('addEventListener');
    window.addEventListener('click', handleButtonClick);

    return function cleanup() {
      console.log('removeEventListener');
      window.removeEventListener('click', handleButtonClick);
    };
  });

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick={handleButtonClick}>Add Value</button>
    </div>
  )
};

export default SuperComponent;