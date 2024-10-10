import { OPTION_KEY } from "../utilities/constants";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  // fetch now palying movies from TMDB
  const getNowPlayingMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      OPTION_KEY
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json));
    // console.log("Now Playing movies", json);
  };

  useEffect(() => {
    getNowPlayingMoviesList();
  }, []);
};

export default useNowPlayingMovies;
