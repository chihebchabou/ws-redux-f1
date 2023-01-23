import { DECREMENT, INCREMENT, INCREMENTBYTEN } from '../actions/types';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case INCREMENTBYTEN:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
