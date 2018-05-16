import React from "react";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

import MovieList from "./MovieList.jsx";
import Trailer from "./Trailer.jsx";

const mapDispatchToProps = dispatch => {
  return {
    watchTrailer: event => dispatch(actions.watchTrailer(event))
  };
};

const mapStateToProps = store => ({
  loggedIn: store.loggedIn,
  movies: store.movies,
  currentMovie: store.currentMovie,
  watching: store.watching,
});

const UserHome = props => {
  if (props.loggedIn === true)
    return (
      <div>
        <Trailer watching={props.watching} currentMovie={props.currentMovie} />
        <MovieList movies={props.movies} watchTrailer={props.watchTrailer} />
      </div>
    );
  else return <div className="white-text">Please Log in.</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
