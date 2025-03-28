import "./App.css";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import MoviesRecommendations from "./components/MoviesRecommendations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";

function App() {
  return (
    <div>
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
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/recommend" element={<MoviesRecommendations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
