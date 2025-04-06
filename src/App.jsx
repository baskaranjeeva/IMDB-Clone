import "./App.css";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import MoviesRecommendations from "./components/MoviesRecommendations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import { useState, useEffect } from "react";
import { MovieContext } from "./components/MovieContext";

function App() {
  const [watchlist, setWatchList] = useState([]);

  const handleAddWatchList = (movieObj) => {
    let updatedWatchlist = [...watchlist, movieObj];
    setWatchList(updatedWatchlist);
    // console.log(updatedWatchlist);
    localStorage.setItem("myMovie_2", JSON.stringify(updatedWatchlist));
  };

  useEffect(() => {
    let moviesFromLs = localStorage.getItem("myMovie_2");
    if (!moviesFromLs) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLs));
  }, []);
  // console.log(watchlist);
  return (
    <div>
      <MovieContext.Provider value={({ handleAddWatchList }, { watchlist })}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  {/* <div className="flex flex-wrap justify-center gap-8 ml-5 mr-5">
                  <MovieCard />
                  </div> */}
                  <Movies />
                </>
              }
            />
            <Route
              path="/watchlist"
              element={<Watchlist watchlist={watchlist} />}
            />
            <Route path="/recommend" element={<MoviesRecommendations />} />
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
