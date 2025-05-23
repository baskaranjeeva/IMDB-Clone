import React from "react";
import Logo from "../IMDB_movie_logo_1.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-start  items-center w-[85%]  m-auto">
      <div>
        <img className="w-[80px]" src={Logo} />
      </div>
      <div className="w-[25rem] flex justify-start ml-10 gap-10 text-2xl font-bold text-blue-600">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
    </div>
  );
}

export default Navbar;
