import React, { useEffect, useState } from "react";
import genreids from "../utilities/genre";

function Watchlist({ watchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(genreList);
  }, [watchlist]);

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }
  function handleFilter(genre) {
    setCurrGenre(genre);
  }
  return (
    <div>
      <div className="flex justify-center m-4">
        {/* genre Filter */}
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4 cursor-pointer"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold mx-4 cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center m-4">
        {/* Search box */}
        <input
          className="w-[18rem] h-[3rem] border-2 border-gray-300"
          type="text"
          placeholder="Search Movies"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="ml-8 mr-8">
        {/* Table */}
        <table className="w-full">
          <thead className="bg-gray-300 ">
            <tr className="h-[3rem]">
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Delete Movies</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="text-center border-b-1 border-gray-300">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td className="text-red-500">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Watchlist;
