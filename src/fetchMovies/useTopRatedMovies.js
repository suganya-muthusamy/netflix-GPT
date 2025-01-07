import { useEffect } from "react";
import { addTopRatedMovies } from "../redux/moviesSlice";
import { OPTION_KEY } from "../utilities/constants";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMoviesList = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        OPTION_KEY
      );

      const json = await data.json();
      dispatch(addTopRatedMovies(json));
    };

    getTopRatedMoviesList();
  }, [dispatch]);
};

export default useTopRatedMovies;
