import React from "react";
import { useState, useEffect } from "react";
import { BASE_URL } from "../utilities/constants";
import axios from "axios";

function Banner() {
  const [trendingMovie, setTrendingMovie] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=1806b0958523875dfa6632afce44caad"
      )
      .then(function (res) {
        let randomMovie = res.data.results[Math.floor(Math.random() * 20)];
        setTrendingMovie(randomMovie);
      });
    // console.log(trendingMovie);
  }, []); // only execute the callback on mounting
  if (!trendingMovie) {
    return <h1>...Loading</h1>;
  }
  // console.log(trendingMovie);
  return (
    <div className="flex justify-center ">
      <div className="relative w-[85%] ">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <img
          className="w-[100vw] h-[60vh] bg-cover mb-5"
          src={BASE_URL + trendingMovie.backdrop_path}
        />
        <p className="absolute left-[50%] text-2xl bottom-10 text-white translate-x-[-50%]">
          {trendingMovie.title}
        </p>
      </div>
    </div>
  );
}

export default Banner;
