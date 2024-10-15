import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-semibold py-5 text-white">{title}</h1>

      <div className="flex flex-wrap">
        {movies &&
          movies?.results.map((movie) => {
            return <MovieCard key={movie.key} posterPath={movie.poster_path} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
