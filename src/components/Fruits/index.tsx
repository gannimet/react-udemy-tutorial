import React from 'react';
import { FruitsProps, FruitsState } from './interface';

class Fruits extends React.Component<FruitsProps, FruitsState> {
  constructor(props: FruitsProps) {
    super(props);

    this.state = {
      fruits: ['apple', 'coconut'],
      newFruit: ''
    };
  }

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newFruit: event.currentTarget.value,
    })
  }

  handleOnClick = () => {
    this.setState({
      fruits: [this.state.newFruit, ...this.state.fruits],
      newFruit: '',
    })
  }

  render() {
    const { fruits, newFruit } = this.state;
    const fruitsUi = fruits.map((fruit) => {
      return <li key={fruit}><span>{fruit}</span><input /></li>;
    });

    return (
      <>
        <h1>Fruits</h1>
        <ul>
          {fruitsUi}
        </ul>
        <input value={newFruit} onChange={this.handleOnChange} />
        <button onClick={this.handleOnClick}>Add fruit</button>
      </>
    )
  }
}

export default Fruits;