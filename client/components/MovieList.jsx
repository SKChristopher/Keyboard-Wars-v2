import React from "react";

import Movie from "./Movie";
const linkArr = [
  "https://pbs.twimg.com/media/DYabBmTXUAAVOx_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/2/23/IsleOfDogsFirstLook.jpg"
];

const MovieList = props => {
  let movies = [];
  for (let i = 0; i < 2; i += 1) {
    movies.push(<Movie movieImg={linkArr[i]} />);
  }
  return <div>{movies}</div>;
};

export default MovieList;
