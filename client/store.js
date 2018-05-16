import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer.js';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  appReducer,
  applyMiddleware(thunk)
);

export default store;