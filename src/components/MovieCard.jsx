import React from "react";

function MovieCard({ movieObject }) {
  return (
    <div
      className="w-[200px] h-[40vh] bg-cover content-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
      }}
    >
      <h5 className="text-white text-center text-xl bg-gray-800/50 rounded-lg">
        {movieObject.title}
      </h5>
    </div>
  );
}

export default MovieCard;
