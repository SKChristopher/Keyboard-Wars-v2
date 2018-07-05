import * as types from "../constants/actionTypes";

export const addUser = (event, inType, cb) => ({
  type: types.ADD_USER,
  payload: {
    event: event,
    inType: inType,
    cb: cb
  }
});

export const verifyUser = (event, inType, cb) => ({
  type: types.VERIFY_USER,
  payload: {
    event: event,
    inType: inType,
    cb: cb
  }
});

export const updateInType = inType => ({
  type: types.UPDATE_IN_TYPE,
  payload: inType
});

export const watchTrailer = () => ({
  type: types.WATCH_TRAILER,
  payload: {
    event: event,
  }
});

export const closeTrailer = () => ({
  type: types.CLOSE_TRAILER,
});

export const addToFavorites = () => ({
  type: types.ADD_TO_FAVORITES,
  payload: {
    event: event,
  }
});
