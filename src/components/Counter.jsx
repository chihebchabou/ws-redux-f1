import {
  increment,
  decrement,
  incrementByTen,
  incrementAsync,
} from '../redux/actions/counterActions';

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counterReducer.counter);
  const loading = useSelector(state => state.counterReducer.loading);
  const dispatch = useDispatch();

  return (
    <>
      <div className="mb-3">
        <span>{loading === true ? 'Please wait...' : counter}</span>
      </div>
      <div className="flex justify-content-around">
        <button className="width-100" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="width-100" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button
          className="width-100"
          onClick={() => dispatch(incrementByTen())}
        >
          +10
        </button>
        <button
          className="width-100"
          onClick={() => dispatch(incrementAsync())}
        >
          + Async
        </button>
      </div>
    </>
  );
};

export default Counter;
