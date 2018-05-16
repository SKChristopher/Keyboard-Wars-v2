import * as types from '../constants/actionTypes';

const initialState = {
  counter: 0,
};

const appReducer = (state=initialState, action) => {

  switch(action.type) {
    case types.TYPE_1:
      
      return state;

    case types.TYPE_2:

    default:
      return state;
  }
};

export default appReducer;