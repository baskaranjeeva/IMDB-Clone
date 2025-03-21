import "./App.css";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
Banner;

function App() {
  return (
    <div>
      <Navbar />
      <div className="space-y-10 ">
        <Banner />

        <div className="flex flex-wrap justify-center">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}

export default App;
