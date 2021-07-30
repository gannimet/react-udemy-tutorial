import React from 'react';
import Button from '../Button/index';
import ButtonGroup from '../ButtonGroup';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ButtonGroup>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          Test
        </ButtonGroup>
      </div>
    )
  }
}

export default HomePage;