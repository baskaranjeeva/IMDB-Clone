import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import store from "../redux/store";
import movieSlice from "../slices/movieSlice";
import movieMiddleware from "../redux/movieMiddleware";

function Movies() {
  // const [movies, setMovies] = useState([]);
  const page = useSelector((store) => store.page.pageNo);
  const { movies, loading, error } = useSelector((store) => store.movieState);
  const dispatch = useDispatch();
  // console.log(page);
  // const [page, setPage] = useState(1);
  // function prevPage() {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // }
  // function nextPage() {
  //   setPage(page + 1);
  // }
  // console.log(movies);
  useEffect(() => {
    dispatch(movieMiddleware(page));
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/popular?api_key=1806b0958523875dfa6632afce44caad&language=en-US&page=${page}`
    //   )
    //   .then((response) => {
    //     // console.log(response.data.results);
    //     setMovies(response.data.results);
    //   })
    //   .catch((err) => {
    //     console.error(err, "Coudn't fetch API data..");
    //   });
  }, [page]);
  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Ops something went wrong!!!</h1>;
  }
  return (
    <div>
      <div className="flex flex-wrap justify-evenly gap-8 m-5">
        {movies.map((movieObj) => (
          <MovieCard movieObject={movieObj} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Movies;
