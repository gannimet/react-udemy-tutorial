import React, { useRef, useState } from 'react';
import ChildComponent from '../ChildComponent';
import { ChildCompRef } from '../ChildComponent/interface';

const SuperComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const childCompRef = useRef<ChildCompRef>(null);

  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  const handleChildButtonClick = () => {
    childCompRef.current?.handleButtonClick();
  };
  
  return (
    <div className="App">
      <h1>Super Component</h1>
      <p>Counter: {counter}</p>
      <button onClick={handleButtonClick}>Update Counter</button>
      <button onClick={handleChildButtonClick}>Update Child Component Counter</button>
      <ChildComponent ref={childCompRef} />
    </div>
  )
};

export default SuperComponent;