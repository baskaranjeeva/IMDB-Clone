import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function nextPage() {
    setPage(page + 1);
  }
  console.log(movies);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1806b0958523875dfa6632afce44caad&language=en-US&page=${page}`
      )
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error(err, "Coudn't fetch API data..");
      });
  }, [page]);
  return (
    <div>
      <div className="flex flex-wrap justify-evenly gap-8 m-5">
        {movies.map((movieObj) => (
          <MovieCard movieObject={movieObj} />
        ))}
      </div>
      <Pagination pageNo={page} prePg={prevPage} nxtPg={nextPage} />
    </div>
  );
}

export default Movies;
