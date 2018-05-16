import { createStore } from 'redux';
import appReducer from './reducers/appReducer.js';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  appReducer,
);

export default store;