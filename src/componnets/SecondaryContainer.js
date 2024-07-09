import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((appStore) => appStore.movies);
  const now_playing = movies?.nowPlayingMovies;
  const popular = movies?.popularMovies;
  const top_rated = movies?.topRatedMovies;
  const up_coming = movies?.upcomingMovies;

  return (
    <div className="-mt-[20%] ">
      <MovieList type="Now Playing" movies={now_playing} />
      <MovieList type="Popular" movies={popular} />
      <MovieList type="Top Rated" movies={top_rated} />
      <MovieList type="Up Coming" movies={up_coming} />
    </div>
  );
};

export default SecondaryContainer;
