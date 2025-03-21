import React from "react";
import Logo from "../IMDB_movie_logo_1.png";
function Navbar() {
  return (
    <div className="flex justify-between  items-center bg-teal-800  ">
      <div>
        <img className="w-[80px]" src={Logo} />
      </div>
      <div className="w-[30rem] flex justify-evenly text-lg font-bold text-white">
        <a>Movies</a>
        <a>Watchlist</a>
        <a>Movies Recommondations</a>
      </div>
    </div>
  );
}

export default Navbar;
