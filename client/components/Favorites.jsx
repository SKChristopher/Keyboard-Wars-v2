import React from "react";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

import Movie from "./Movie.jsx";
import Trailer from "./Trailer.jsx";

const mapDispatchToProps = dispatch => {
  return {
    // addToFavorites: (event) => dispatch(actions.addToFavorites(event)),
  };
};

const mapStateToProps = store => ({
  favorites: store.favorites,
  movies: store.movies,
  watchTrailer: store.watchTrailer,
  watching: store.watching,
  currentMovie: store.currentMovie,
  closeTrailer: store.closeTrailer
});

const Favorites = props => {
  let favorites = [];
  for (let i = 0; i < props.favorites.length; i += 1) {
    favorites.push(
      <Movie
        movieImg={props.favorites[i].img}
        watchTrailer={props.watchTrailer}
        id={props.favorites[i].title}
      />
    );
  }
  return (
    <div>
      <Trailer
        watching={props.watching}
        currentMovie={props.currentMovie}
        closeTrailer={props.closeTrailer}
      />
      <div className="movie-list">{favorites}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
