import { OPTION_KEY } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMoviesList = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        OPTION_KEY
      );

      const json = await data.json();
      dispatch(addUpcomingMovies(json));
    };

    getUpcomingMoviesList();
  }, [dispatch]);
};

export default useUpcomingMovies;
