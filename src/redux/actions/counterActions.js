import {
  DECREMENT,
  INCREMENT,
  INCREMENTBYTEN,
  INCREMENTASYNC,
  ISLOADING,
} from './types';

// Increment Action
export const increment = () => {
  return { type: INCREMENT };
};

// Decrement Action
export const decrement = () => {
  return { type: DECREMENT };
};

// Increment By Ten
export const incrementByTen = () => {
  return { type: INCREMENTBYTEN, payload: 10 };
};

// Asynchronous increment
export const incrementAsync = () => (dispatch, getState) => {
  const counter = getState().counterReducer.counter;
  setTimeout(() => {
    dispatch({ type: INCREMENTASYNC, payload: counter + 1 });
  }, 2000);

  dispatch({ type: ISLOADING });
};
