import React from "react";

import Movie from "./Movie.jsx";

const MovieList = props => {
  let movies = [];
  for (let key in props.movies) {
    movies.push(<Movie movieImg={props.movies[key].img} watchTrailer={props.watchTrailer} id={props.movies[key].title} addToFavorites={props.addToFavorites}/>);
  }
  return <div className="movie-list">{movies}</div>;
};

export default MovieList;
