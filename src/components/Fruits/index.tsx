import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { FruitsDispatchProps, FruitsOwnProps, FruitsProps, FruitsStateProps } from './interface';

class Fruits extends React.Component<FruitsProps> {
  handleAddFruits = () => {
    this.props.addFruits(['coconut', 'strawberry']);
  }

  render() {
    const { ownerName, fruits } = this.props;

    return (
      <div>
        <h1>Owner: {ownerName}</h1>
        <h1>Fruits</h1>
        <ul>
          {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
        </ul>

        <button onClick={this.handleAddFruits}>Add fruits</button>
      </div>
    )
  }
}

const mapStateToProps: MapStateToProps<FruitsStateProps, FruitsOwnProps, string[]> = (state, ownProps) => {
  return {
    fruits: state,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<FruitsDispatchProps, FruitsOwnProps> = (dispatch, ownProps) => {
  return {
    addFruits: (fruits) => dispatch({ type: 'ADD_FRUITS', fruits }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fruits);