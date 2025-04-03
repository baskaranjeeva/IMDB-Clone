import React, { useEffect, useState } from "react";
import genreids from "../utilities/genre";

function Watchlist({ watchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");
  const [sortAsc, setSortAsc] = useState(false);
  const [sortDec, setSortDec] = useState(false);
  const [delWatchlist, setDelWatchList] = useState(false);

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    // console.log(genreList);
  }, [watchlist, sortAsc, sortDec, delWatchlist]);

  function handleSearch(e) {
    setSearch(e.target.value);
    // console.log(search);
  }
  function handleFilter(genre) {
    setCurrGenre(genre);
  }
  function sortAscending() {
    watchlist.sort((a, b) => a.vote_average - b.vote_average);
    // for (let i = 0; i < watchlist.length; i++) {
    //   console.log(watchlist[i].vote_average);
    // }
    setSortAsc(true);
    setSortDec(false);
    console.log(watchlist);
  }
  function sortDecending() {
    watchlist.sort((a, b) => b.vote_average - a.vote_average);
    // for (let i = 0; i < watchlist.length; i++) {
    //   console.log(watchlist[i].vote_average);
    // }
    setSortDec(true);
    setSortAsc(false);
  }
  // console.log(watchlist);
  function deleteMovie(del_movie_obj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == del_movie_obj.id) {
        delete watchlist[i];
        setDelWatchList(true);
      }
    }
  }

  console.log(watchlist);

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
              <th>
                <i
                  class="fa-solid fa-arrow-up cursor-pointer"
                  onClick={() => sortAscending()}
                ></i>{" "}
                Ratings
                {"  "}
                <i
                  class="fa-solid fa-arrow-down cursor-pointer"
                  onClick={() => sortDecending()}
                ></i>
              </th>
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
                    <td
                      className="text-red-500 cursor-pointer"
                      onClick={() => deleteMovie(movieObj)}
                    >
                      Delete
                    </td>
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
