import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-semibold py-5 text-white">{title}</h1>

      <div className="flex overflow-scroll no-scrollbar">
        {movies &&
          movies?.results.map((movie, i) => {
            return (
              <MovieCard
                key={i}
                movieKey={movie.key}
                posterPath={movie.poster_path}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MovieList;
