import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
function Movies() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1806b0958523875dfa6632afce44caad&language=en-US&page=1`
      )
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error(err, "Coudn't fetch API data..");
      });
  }, []);
  return (
    <div className="flex flex-wrap justify-evenly gap-8 ml-5 mr-5">
      {movies.map((movieObj) => (
        <MovieCard movieObject={movieObj} />
      ))}
    </div>
  );
}

export default Movies;
