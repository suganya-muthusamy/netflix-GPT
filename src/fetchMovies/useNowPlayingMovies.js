import { OPTION_KEY } from "../utilities/constants";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch now playing movies from TMDB
    const getNowPlayingMoviesList = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        OPTION_KEY
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json));
    };

    getNowPlayingMoviesList();
  }, [dispatch]);
};

export default useNowPlayingMovies;
