import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((appStore) => appStore.movies);
  const now_playing = movies?.nowPlayingMovies;
  const popular = movies?.popularMovies;
  const top_rated = movies?.topRatedMovies;
  const up_coming = movies?.upcomingMovies;

  console.log("play", now_playing);

  const movieData = [
    { title: "Now Playing Movies", movies: now_playing },
    { title: "Popular Movies", movies: popular },
    { title: "Top Rated Movies", movies: top_rated },
    { title: "Up Coming Movies", movies: up_coming },
  ];

  return (
    <div className="w-full m-auto">
      <div className="bg-black mt-0 lg:-mt-[5rem] xl:-mt-[15rem]">
        {movieData.map((movie) => {
          return (
            <MovieList
              key={movie.title}
              title={movie.title}
              movies={movie.movies}
            />
          );
        })}
      </div>
      {/* <MovieList title="Now Playing" movies={now_playing} />
      <MovieList title="Popular" movies={popular} />
      <MovieList title="Top Rated" movies={top_rated} />
      <MovieList title="Up Coming" movies={up_coming} /> */}
    </div>
  );
};

export default SecondaryContainer;
