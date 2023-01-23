import React from 'react';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
  incrementByTen,
} from '../redux/actions/counterActions';

const Counter = ({ counter, inc, dec, incByTen }) => {
  // console.log(props);
  return (
    <div>
      <button onClick={() => inc()}>+</button>
      {counter}
      <button onClick={() => dec()}>-</button>
      <button onClick={() => incByTen()}>+10</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
    incByTen: () => dispatch(incrementByTen()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
