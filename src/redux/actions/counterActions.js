import { DECREMENT, INCREMENT, INCREMENTBYTEN } from './types';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const incrementByTen = () => {
  return {
    type: INCREMENTBYTEN,
    payload: 10,
  };
};
