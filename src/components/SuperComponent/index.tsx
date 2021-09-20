import React, { useState } from 'react';
import { useEffectOnUpdate } from '../../hooks/useEffectOnUpdate';
import { usePrevious } from '../../hooks/usePrevious';

const SuperComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const previousValue = usePrevious(counter);
  
  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  useEffectOnUpdate(() => {
    console.log('Previous value:', previousValue);
    console.log('Current value:', counter);
    console.log('Component did update');
    console.log('---');
  });
  
  return (
    <div className="App">
      <h1>Super Component</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleButtonClick}>Update Counter</button>
    </div>
  )
};

export default SuperComponent;