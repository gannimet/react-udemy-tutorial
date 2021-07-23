import React from 'react';
import SecondComponent from '../SecondComponent/index';

class FirstComponent extends React.Component {
  render() {
    return (
      <>
        <h1>First Component</h1>
       <SecondComponent />
      </>
    )
  }
}

export default FirstComponent;