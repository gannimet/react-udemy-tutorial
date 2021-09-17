import React, { useEffect, useState } from 'react';

const SuperComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [newValue, setNewValue] = useState(0);

  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  const handleNewValueButtonClick = () => {
    setNewValue(newValue + 1);
  };

  /**
   * Runs AFTER React paints changes in the DOM
   * Asynchronously, non-blocking
   */
  useEffect(() => {
    console.log('UseEffect triggered');
  }, [counter, newValue]);

  /**
   * Runs BEFORE React paints changes in the DOM
   * Synchronously, blocking
   * Updates scheduled inside will be flushed synchronously
   */
  // useLayoutEffect(() => {
  //   if (counter === 0) {
  //     setCounter(5);
  //   }
  // });

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <p>New Value: {newValue}</p>
      <button onClick={handleButtonClick}>Add Counter</button>
      <button onClick={handleNewValueButtonClick}>Add New Value</button>
    </div>
  )
};

export default SuperComponent;