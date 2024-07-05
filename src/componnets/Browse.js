import Header from "./Header";
import useNowPlayingMovies from "../fetchMovies/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="">
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
