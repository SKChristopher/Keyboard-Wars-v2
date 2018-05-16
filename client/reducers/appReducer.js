import * as types from "../constants/actionTypes";

const initialState = {
  counter: 0,
  inType: "sign"
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      action.payload.event.preventDefault();
      return state;

    case types.VERIFY_USER:
      action.payload.event.preventDefault();
      return state;

    case types.UPDATE_IN_TYPE:
      state.inType = action.payload;
      return state;

    default:
      return state;
  }
};

export default appReducer;
