import React from "react";

import Movie from "./Movie.jsx";

const MovieList = props => {
  let movies = [];
  for (let key in props.movies) {
    movies.push(<Movie movieImg={props.movies[key].img} watchTrailer={props.watchTrailer}/>);
  }
  return <div id="movie-list">{movies}</div>;
};

export default MovieList;
