import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
function MovieCard({ movieObject }) {
  let { handleAddWatchList, watchlist } = useContext(MovieContext);

  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="w-[200px] h-[40vh] bg-cover "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
      }}
    >
      {doesContain(movieObject) ? (
        <div className="flex justify-end mr-1 mt-1">&#10060;</div>
      ) : (
        <div
          onClick={() => handleAddWatchList(movieObject)}
          className="flex justify-end mr-1 mt-1 cursor-pointer"
        >
          &#128151;
        </div>
      )}
      <h5 className="text-white text-center text-xl bg-gray-800/30 rounded-lg mt-30">
        {movieObject.title}
      </h5>
    </div>
  );
}

export default MovieCard;
