export const ADD_FRUIT = 'ADD_FRUIT';
export const ADD_FRUITS = 'ADD_FRUITS';
export const SELL_FRUIT = 'SELL_FRUIT';
export const SELL_OUT = 'SELL_OUT';

export const addFruit = (fruit) => {
  return {
    type: ADD_FRUIT,
    fruit,
  }
};

export const addFruits = (fruits) => {
  return {
    type: ADD_FRUITS,
    fruits,
  }
};

export const sellOut = () => {
  return {
    type: SELL_OUT,
  }
};
