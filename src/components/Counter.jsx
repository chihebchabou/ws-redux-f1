import {
  increment,
  decrement,
  incrementByTen,
  incrementAsync,
} from '../redux/actions/counterActions';
import { connect } from 'react-redux';

const Counter = ({ counter, loading, inc, dec, incByTen, incAsync }) => {
  return (
    <>
      <div className="mb-3">
        <span>{loading === true ? 'Please wait...' : counter}</span>
      </div>
      <div className="flex justify-content-around">
        <button className="width-100" onClick={() => inc()}>
          +
        </button>
        <button className="width-100" onClick={() => dec()}>
          -
        </button>
        <button className="width-100" onClick={() => incByTen()}>
          +10
        </button>
        <button className="width-100" onClick={() => incAsync()}>
          + Async
        </button>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counterReducer.counter,
    loading: state.counterReducer.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
    incByTen: () => dispatch(incrementByTen()),
    incAsync: () => dispatch(incrementAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
