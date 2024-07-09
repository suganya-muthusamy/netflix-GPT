import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ type, movies }) => {
  return (
    <div className="px-2 sm:px-5 py-8 md:px-15 lg:px-20 bg-black">
      <div className="">
        <h1 className="text-2xl font-semibold py-5 text-white">{type}</h1>

        <div className="flex overflow-x-scroll scrollbar-hide w-screen">
          <div className="flex">
            {movies &&
              movies?.results.map((movie) => {
                return (
                  <MovieCard key={movie.key} posterPath={movie.poster_path} />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
