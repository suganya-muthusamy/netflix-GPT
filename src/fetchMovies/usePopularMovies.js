import { OPTION_KEY } from "../utilities/constants";
import { addPopularMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch now playing movies from TMDB
    const getPopularMoviesList = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        OPTION_KEY
      );

      const json = await data.json();
      dispatch(addPopularMovies(json));
      // "Popular movies", json.results);
    };

    getPopularMoviesList();
  }, [dispatch]);
};

export default usePopularMovies;
