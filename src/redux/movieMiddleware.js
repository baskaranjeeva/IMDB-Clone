import axios from "axios";
import movieSlice from "../slices/movieSlice";

const action = movieSlice.actions;
export default function movieMiddleware(page) {
  return async function (dispatch) {
    try {
      dispatch(action.setLoading());
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1806b0958523875dfa6632afce44caad&language=en-US&page=${page}`
      );
      dispatch(action.setMovies(res.data.results));
    } catch (error) {
      dispatch(action.setError());
    }
  };
}
