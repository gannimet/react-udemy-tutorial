import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import FruitsActions from '../../store/actions/fruitsActions';
import { rootReducer } from '../../store/reducers/rootReducer';
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

const mapStateToProps: MapStateToProps<FruitsStateProps, FruitsOwnProps, ReturnType<typeof rootReducer>> = (state, ownProps) => {
  return {
    fruits: state.fruits,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<FruitsDispatchProps, FruitsOwnProps> = (dispatch: any, ownProps) => {
  const fruitsActions = new FruitsActions();
  
  return {
    addFruits: (fruits) => dispatch(fruitsActions.addFruits(fruits)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fruits);