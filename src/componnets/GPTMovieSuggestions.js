import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import appStore from "../redux/appStore";

const GPTMovieSuggestions = () => {
  const { movieLists, movieNames } = useSelector((appStore) => appStore.GPT);
  console.log(movieNames);

  console.log(movieLists);

  return (
    <div className="text-white mt-5 bg-slate-500 ">
      {movieNames?.map((movieName, i) => {
        return <MovieList key={i} title={movieName} movies={movieLists?.[i]} />;
      })}
    </div>
  );
};

export default GPTMovieSuggestions;
