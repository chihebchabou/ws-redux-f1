import {
  DECREMENT,
  INCREMENT,
  INCREMENTASYNC,
  INCREMENTBYTEN,
  ISLOADING,
} from '../actions/types';

// Initial State
const initialState = {
  counter: 0,
  loading: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case INCREMENTBYTEN:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    case INCREMENTASYNC:
      return {
        ...state,
        counter: action.payload,
        loading: false,
      };

    case ISLOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default counterReducer;
