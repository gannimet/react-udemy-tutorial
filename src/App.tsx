import React from 'react';
import './App.css';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';

class App extends React.Component<{}, { selectedIndex?: number }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      selectedIndex: undefined,
    }
  }

  handleButtonGroupClick = (index: number) => {
    console.log('selected:', index);
    this.setState({
      selectedIndex: index,
    })
  }

  render() {
    return (
      <>
      <h1>Reusable buttons</h1>

      <h2>Primary</h2>
      <Button type="primary">Primary button</Button>

      <h2>Default</h2>
      <Button type="default">Default Button</Button>

      <h2>Button group</h2>
      <ButtonGroup onClick={this.handleButtonGroupClick} selected={this.state.selectedIndex}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
      </ButtonGroup>
    </>
    )
  }
}

export default App;
