import * as types from "../constants/actionTypes";

export const addUser = (event, inType) => ({
  type: types.ADD_USER,
  payload: {
    event: event,
    inType: inType
  }
});

export const verifyUser = (event, inType) => ({
  type: types.VERIFY_USER,
  payload: {
    event: event,
    inType: inType
  }
});

export const updateInType = inType => ({
  type: types.UPDATE_IN_TYPE,
  payload: inType
});

export const watchTrailer = () => ({
  type: types.WATCH_TRAILER,
  payload: 'string'
});
