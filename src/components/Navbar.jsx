import React from "react";
import Logo from "../IMDB_movie_logo_1.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between  items-center bg-teal-800  ">
      <div>
        <img className="w-[80px]" src={Logo} />
      </div>
      <div className="w-[30rem] flex justify-evenly text-lg font-bold text-white">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/recommend">Movies Recommondations</Link>
      </div>
    </div>
  );
}

export default Navbar;
