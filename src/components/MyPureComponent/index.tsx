import React from 'react';
import MyReactMemo from '../MyReactMemo';
import { MyPureComponentProps, MyPureComponentState } from './interface';

class MyPureComponent extends React.PureComponent<MyPureComponentProps, MyPureComponentState> {
  constructor(props: MyPureComponentProps) {
    super(props);

    this.state = {
      name: 'Richard',
      address: {
        city: 'Berlin',
        state: 'Germany',
      }
    };
  }

  handleSetState = () =>{
    const newAddress = {
      city: 'New York',
      state: 'Germany',
    };

    this.setState({
      address: newAddress,
    });
  };

  render() {
    const { name, address } = this.state;

    return (
      <>
        <h1>Pure Component</h1>
        <MyReactMemo name={name} address={address} />
        <button onClick={this.handleSetState}>Set State</button>
      </>
    );
  }
}

export default MyPureComponent;