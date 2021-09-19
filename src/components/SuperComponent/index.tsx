import React, { useRef, useState } from 'react';

const SuperComponent: React.FC = () => {
  const [counter, setCounter] = useState(0);
  // const [buttonWidth, setButtonWidth] = useState(0);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  let instanceVariable = useRef(0);

  const handleButtonClick = () => {
    instanceVariable.current += 1;
    setCounter(counter + 1);
  };

  // const buttonCallbackRef = (element: HTMLButtonElement | null) => {
  //   console.log('ref element:', element);
  //   if (element !== null) {
  //     setButtonWidth(element.clientWidth);
  //   }
  // };

  return (
    <div className="App">
      <h1>Super Component</h1>
      <p>Counter: {counter}</p>
      <p>Instance Variable: {instanceVariable.current}</p>
      {/* <p>Button width: {buttonWidth}</p> */}
      {/* <button ref={buttonCallbackRef} onClick={handleButtonClick}>Update Counter</button> */}
      <button ref={buttonRef} onClick={handleButtonClick}>Update Counter</button>
    </div>
  )
};

export default SuperComponent;