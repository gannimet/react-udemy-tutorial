import React, { useMemo, useState } from 'react';
import Button from '../Button';

const SuperComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  // const memoizedHandleButtonClick = useCallback(handleButtonClick, [counter]);

  const memoizedHandleButtonClick = useMemo(() => handleButtonClick, []);

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <Button onClick={memoizedHandleButtonClick}></Button>
    </div>
  )
};

export default SuperComponent;