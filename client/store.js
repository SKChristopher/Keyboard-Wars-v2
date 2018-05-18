import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer.js';

const store = createStore(
  appReducer,
  applyMiddleware(thunk)
);

export default store;