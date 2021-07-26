import React from 'react';

class SuperComponent extends React.Component {
  printSuperComponent = () => {
    console.log('super component');
  }

  render() {
    return (
      <div>
        <h2>SuperComponent</h2>
      </div>
    )
  }
}

export default SuperComponent;