import * as types from "../constants/actionTypes";
import axios from "axios";

const initialState = {
  counter: 0,
  inType: "sign",
  loggedIn: false,
  watching: false,
  movies: {
    Avengers: {
      img:
        "http://t2.gstatic.com/images?q=tbn:ANd9GcQoBtRhueP0Kn_O7e89DXSBKBUz-1Nu4Ngb9eqFzqF3EbPGWYVP",
      title: "Avengers",
      trailer: "https://www.youtube.com/embed/QwievZ1Tx-8"
    },
    "Isle of Dogs": {
      img:
        "http://t0.gstatic.com/images?q=tbn:ANd9GcTlfoV5kQt5-R8rsorM0EIFLABrhl2Fjw8ODib_tHAM3QJUAeB8",
      title: "Isle of Dogs",
      trailer: "https://www.youtube.com/embed/dt__kig8PVU"
    },
    "Ready Player One": {
      img:
        "http://t0.gstatic.com/images?q=tbn:ANd9GcQsdKo9kNvc88uK7_G6cxhPQcqd2pjP5W__NKQ8HNU0-gWn9-fa",
      title: "Ready Player One",
      trailer: "https://www.youtube.com/embed/cSp1dM2Vj48"
    },
    "Black Panther": {
      img:
        "http://t1.gstatic.com/images?q=tbn:ANd9GcQPpcKQ9eWZGxJe6eXyCW91eayLVm4KqruvJz3GP0F2T2w46yKZ",
      title: "Black Panther",
      trailer: "https://youtube.com/embed/xjDjIWPwcPU"
    },
    Rampage: {
      img: "https://www.mtdemocrat.com/files/2018/04/Rampage-poster.jpg",
      title: "Rampage",
      trailer: "https://youtube.com/embed/coOKvrsmQiI"
    },
    "Life of the Party": {
      img:
        "http://t1.gstatic.com/images?q=tbn:ANd9GcRqSb2Bwyez4onPd1X5Z1PPJxYIZQ_aUVF_fEC8wObm1HzKwvps",
      title: "Life of the Party",
      trailer: "https://youtube.com/embed/T1B1CxmAXLk"
    },
    "Truth or Dare": {
      img:
        "http://t1.gstatic.com/images?q=tbn:ANd9GcRUejO8nuOTtu-88efaopbJJ4rnl0wrfzVWFfvOitxnUo45bcMj",
      title: "Truth or Dare",
      trailer: "https://youtube.com/embed/BjRNY3u3bUw"
    },
    "Tomb Raider": {
      img:
        "http://t1.gstatic.com/images?q=tbn:ANd9GcQGBx-FI1Xp1Xk9raKVhCrW2pj-vBUpbjfY5liEfDmU2DzKV-Uf",
      title: "Tomb Raider",
      trailer: "https://youtube.com/embed/8ndhidEmUbI"
    },
    Solo: {
      img:
        "https://upload.wikimedia.org/wikipedia/he/thumb/b/b8/SoloPoster.jpg/1200px-SoloPoster.jpg",
      title: "Solo",
      trailer: "https://youtube.com/embed/jPEYpryMp2s"
    },
    "Incredibles 2": {
      img:
        "http://t1.gstatic.com/images?q=tbn:ANd9GcToVxv9Pjks-gNiQo7xdCsU8kAzgbHfHd3c6PC9tWKe2RgXBlkI",
      title: "Incredibles 2",
      trailer: "https://youtube.com/embed/i5qOzqD9Rms"
    },
    Pandas: {
      img:
        "http://t3.gstatic.com/images?q=tbn:ANd9GcRrMWKv80SCKpXh5HCzigBlFW8Q5Otg_L-GmldwtgyNkR5MbDt1",
      title: "Pandas",
      trailer: "https://youtube.com/embed/r3eaGCk2Acs"
    }
  },
  currentMovie: {
    movie: {
      img: "https://www.mtdemocrat.com/files/2018/04/Rampage-poster.jpg",
      title: "Rampage",
      trailer: "https://youtube.com/embed/coOKvrsmQiI"
    }
  },
  favorites: []
};

const appReducer = (state = initialState, action) => {
  let loggedIn;
  let inType;
  let currentMovie;
  let watching;
  let favorites;

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
            action.payload.cb();
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
            action.payload.cb();
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
      currentMovie = state.movies[action.payload.event.target.className];
      watching = true;
      return { ...state, currentMovie, watching };

    case types.CLOSE_TRAILER:
      watching = false;
      return { ...state, watching };

    case types.ADD_TO_FAVORITES:
      favorites = state.favorites;
      favorites.push(state.movies[action.payload.event.target.className]);
      return { ...state, favorites };

    default:
      return state;
  }
};

export default appReducer;
