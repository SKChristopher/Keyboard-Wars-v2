import React from "react";

const Movie = props => (
  <div className='movie-box'>
    <img className="movie-img" src={props.movieImg} />
    <br/>
    <button className={props.id} onClick={props.watchTrailer}>Watch now</button>
    <button className={props.id} onClick={props.addToFavorites} >Add to Favorites</button>
  </div>
);

export default Movie;
