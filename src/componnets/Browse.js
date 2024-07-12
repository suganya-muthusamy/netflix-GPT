import Header from "./Header";
import useNowPlayingMovies from "../fetchMovies/useNowPlayingMovies";
import usePopularMovies from "../fetchMovies/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../fetchMovies/useTopRatedMovies";
import useUpcomingMovies from "../fetchMovies/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import appStore from "../redux/appStore";

const Browse = () => {
  const showGPTSearch = useSelector((appStore) => appStore.GPT.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="overflow-hidden">
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );

  // MainContainer
  //     movie name, title, description and Trailer
  // SecondaryContainer
  //     movie lists*n
  //       movie cards*n
};

export default Browse;
