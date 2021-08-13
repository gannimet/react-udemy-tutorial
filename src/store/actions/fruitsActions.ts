import { Store } from 'redux';
import { FruitsReducerAction } from '../reducers/fruitsReducer';
import { StoreStateType } from '../reducers/rootReducer';

class FruitsActions {
  static ADD_FRUITS = 'ADD_FRUITS';

  addFruits = (fruits: string[]) => (store: Store<StoreStateType, FruitsReducerAction>): FruitsReducerAction => {
    console.log('fruits state:', store.getState().fruits);
    return {
      type: FruitsActions.ADD_FRUITS,
      fruits,
    };
  };
}

export default FruitsActions;