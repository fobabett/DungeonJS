import { createStore, compose, applyMiddleware } from 'redux';
import root from './reducers';
import thunk from 'redux-thunk';

if (window.__REDUX_DEVTOOLS_EXTENSION__) window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  root,
  compose(applyMiddleware(thunk))
);