import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieLists, movieNames } = useSelector((appStore) => appStore.GPT);
  return (
    <div className="text-white mt-20 bg-black-transparent ">
      {movieNames?.map((movieName, index) => {
        return (
          <MovieList
            key={index}
            title={movieName}
            movies={movieLists?.[index]}
          />
        );
      })}
    </div>
  );
};

export default GPTMovieSuggestions;
