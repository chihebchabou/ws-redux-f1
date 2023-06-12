import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from './reducers/rootReducer';

import thunk from 'redux-thunk';

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools(applyMiddleware(...middleware))
);
