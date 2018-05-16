import * as types from "../constants/actionTypes";
import axios from "axios";

const initialState = {
  counter: 0,
  inType: "sign",
  loggedIn: false,
  movies: {
    Avengers: {
      img:
        "http://t2.gstatic.com/images?q=tbn:ANd9GcQoBtRhueP0Kn_O7e89DXSBKBUz-1Nu4Ngb9eqFzqF3EbPGWYVP",
      title: "Avengers",
      trailer: "https://www.youtube.com/watch?v=QwievZ1Tx-8"
    },
    "Isle of Dogs": {
      img:
        "http://t0.gstatic.com/images?q=tbn:ANd9GcTlfoV5kQt5-R8rsorM0EIFLABrhl2Fjw8ODib_tHAM3QJUAeB8",
      title: "Isle of Dogs",
      trailer: "https://www.youtube.com/watch?v=dt__kig8PVU"
    },
    "Ready Player One": {
      img:
        "http://t0.gstatic.com/images?q=tbn:ANd9GcQsdKo9kNvc88uK7_G6cxhPQcqd2pjP5W__NKQ8HNU0-gWn9-fa",
      title: "Ready Player One",
      trailer: "https://youtu.be/cSp1dM2Vj48"
    },
    "Black Panther": {
      img:
        "http://t1.gstatic.com/images?q=tbn:ANd9GcQPpcKQ9eWZGxJe6eXyCW91eayLVm4KqruvJz3GP0F2T2w46yKZ",
      title: "Black Panther",
      trailer: "https://youtu.be/xjDjIWPwcPU"
    },
    Rampage: {
      img: "https://www.mtdemocrat.com/files/2018/04/Rampage-poster.jpg",
      title: "Rampage",
      trailer: "https://youtu.be/coOKvrsmQiI"
    }
  },
  currentMovie: {
    movie: {
      img: "https://www.mtdemocrat.com/files/2018/04/Rampage-poster.jpg",
      title: "Rampage",
      trailer: "https://youtu.be/coOKvrsmQiI"
    }
  }
};

const appReducer = (state = initialState, action) => {
  let loggedIn;
  let inType;
  let currentMovie;

  switch (action.type) {
    case types.ADD_USER:
      action.payload.event.preventDefault();
      // return
      axios
        .post("signup", {
          username: event.target.username.value,
          password: event.target.password.value
        })
        .then(response => {
          if (response) {
            console.log("New user created:", response.data);
            loggedIn = response.data;
            return { ...state, loggedIn };
          } else {
            console.log("Error, account not created.");
            return state;
          }
        });
      event.target.username.value = "";
      event.target.password.value = "";
      return state;

    case types.VERIFY_USER:
      action.payload.event.preventDefault();
      // return
      axios
        .post("login", {
          username: event.target.username.value,
          password: event.target.password.value
        })
        .then(response => {
          if (response) {
            console.log("User logged in:", response.data);
            loggedIn = true;
            return { ...state, loggedIn };
          } else {
            console.log("Error, cannot log in.");
            loggedIn = false;
            return { ...state, loggedIn };
          }
        });
      event.target.username.value = "";
      event.target.password.value = "";
      // fix so it checks if logged in
      loggedIn = true;
      return { ...state, loggedIn };

    case types.UPDATE_IN_TYPE:
      inType = action.payload;
      return { ...state, inType };

    case types.WATCH_TRAILER:
      currentMovie = state.movies[0];
      return { ...state, currentMovie };

    default:
      return state;
  }
};

export default appReducer;
