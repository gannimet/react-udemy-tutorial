import { Store } from 'redux';

class FruitsActions {
  static ADD_FRUITS = 'ADD_FRUITS';

  addFruits = (fruits: string[]) => (store: Store) => {
    console.log('state:', store.getState());
    return {
      type: FruitsActions.ADD_FRUITS,
      fruits,
    };
  };
}

export default FruitsActions;