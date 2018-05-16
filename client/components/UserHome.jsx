import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MovieList from "./MovieList.jsx";

const mapDispatchToProps = dispatch => {
  return {
    watchTrailer: () => dispatch(actions.watchTrailer())
  };
};

const mapStateToProps = store => ({
  loggedIn: store.loggedIn,
  movies: store.movies,
});

const UserHome = props => {
  if (props.loggedIn === true)
    return (
      <div>
        <MovieList movies={props.movies} watchTrailer={props.watchTrailer}/>
      </div>
    );
  else return <div className="white-text">Please Log in.</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
