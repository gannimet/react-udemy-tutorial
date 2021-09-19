import React, { useImperativeHandle, useState } from 'react';
import { ChildCompRef } from './interface';

const ChildComponent = React.forwardRef<ChildCompRef>((props, ref) => {
  const [counter, setCounter] = useState(0);

  useImperativeHandle(ref, () => ({
    handleButtonClick,
  }));

  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Child Component</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleButtonClick}>Update Counter</button>
    </div>
  )
});

export default ChildComponent;