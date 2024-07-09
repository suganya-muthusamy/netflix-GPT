import Header from "./Header";
import useNowPlayingMovies from "../fetchMovies/useNowPlayingMovies";
import usePopularMovies from "../fetchMovies/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../fetchMovies/useTopRatedMovies";
import useUpcomingMovies from "../fetchMovies/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="overflow-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );

  // MainContainer
  //     movie name, title, description and Trailer
  // SecondaryContainer
  //     movie lists*n
  //       movie cards*n
};

export default Browse;
