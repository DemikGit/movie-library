import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-simple-promise';
import thunk from 'redux-thunk';
import { rootReducer } from './root-reducer';

const enhancers = [];

const middleware = [
  promiseMiddleware(),
  thunk,
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export const store = createStore(
  rootReducer,
  composedEnhancers
);
