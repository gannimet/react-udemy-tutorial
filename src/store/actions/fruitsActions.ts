import { Store } from 'redux';
import { FruitsReducerAction } from '../reducers/fruitsReducer';

class FruitsActions {
  static ADD_FRUITS = 'ADD_FRUITS';

  addFruits = (fruits: string[]) => (store: Store): FruitsReducerAction => {
    console.log('state:', store.getState());
    return {
      type: FruitsActions.ADD_FRUITS,
      fruits,
    };
  };
}

export default FruitsActions;