import React from 'react';

class SecondComponent extends React.Component {
  render() {
    throw new Error('Planned Error');
    return (
      <>
        <h1>Second Component</h1>
      </>
    )
  }
}

export default SecondComponent;