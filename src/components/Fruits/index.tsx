import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import FruitsActions from '../../store/actions/fruitsActions';
import { CustomDispatch, fruitsWithO } from '../../store/middleware/customMiddleware';
import { FruitsReducerAction } from '../../store/reducers/fruitsReducer';
import { StoreStateType } from '../../store/reducers/rootReducer';
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

const mapStateToProps: MapStateToProps<FruitsStateProps, FruitsOwnProps, StoreStateType> = (state, ownProps) => {
  return {
    // fruits: state.fruits,
    fruits: fruitsWithO(state)
  };
};

const mapDispatchToProps = (dispatch: CustomDispatch<StoreStateType, FruitsReducerAction>, ownProps: FruitsOwnProps): FruitsDispatchProps => {
  const fruitsActions = new FruitsActions();
  
  return {
    addFruits: (fruits) => dispatch(fruitsActions.addFruits(fruits)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fruits);