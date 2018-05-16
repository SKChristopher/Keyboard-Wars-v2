import * as types from "../constants/actionTypes";
import axios from 'axios';

const initialState = {
  counter: 0,
  inType: "sign"
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      action.payload.event.preventDefault();
      axios.post('signup', {
        username: event.target.username.value,
        password: event.target.password.value
      }).then(response => {
          if (response) console.log('New user created:', response)
          else console.log ('Error, account not created.');
      });
      event.target.username.value = "";
      event.target.password.value = "";
      return state;

    case types.VERIFY_USER:
      action.payload.event.preventDefault();
      axios.post('login', {
        username: event.target.username.value,
        password: event.target.password.value
      }).then(response => {
          if (response) console.log('User logged in:', response)
          else console.log ('Error, cannot log in.');
      });
      event.target.username.value = "";
      event.target.password.value = "";
      return state;

    case types.UPDATE_IN_TYPE:
      state.inType = action.payload;
      return state;

    default:
      return state;
  }
};

export default appReducer;
