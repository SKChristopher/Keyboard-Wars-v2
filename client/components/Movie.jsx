import React from "react";

const Movie = props => (
  <div className='movie-box'>
    <img className="movie-img" src={props.movieImg} />
    <br/>
    <button onClick={props.watchTrailer}>Watch now</button>
    <button>Add to Favorites</button>
  </div>
);

export default Movie;
