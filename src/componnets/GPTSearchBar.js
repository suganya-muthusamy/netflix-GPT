import { langValues } from "../utilities/languageConstatnts";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utilities/openai";
import { useRef } from "react";
import { OPTION_KEY } from "../utilities/constants";
import { addTmdbResults } from "../redux/GPTSlice";

const GPTSearchBar = () => {
  const lang = useSelector((appStore) => appStore.config.lang);
  const dispatch = useDispatch();

  const searchText = useRef();

  const searchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      OPTION_KEY
    );

    const json = data.json();
    return json;
  };

  const handleGPTResults = async () => {
    const searchQuery =
      "Act as a movie reccomendation system for the following query: " +
      searchText.current.value +
      "give only 5 movie names without serial number as given example ahead: given example: suganya, anbu, appa, amma, akka";

    const GPTResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });

    // array of movie [red, doom, appa, akka,amma]
    const GPTMoviesSuggesstions =
      GPTResults?.choices?.[0]?.message?.content.split(",");

    // search each movies in tmdb server
    const allPromises = GPTMoviesSuggesstions.map((movie) =>
      searchMovies(movie)
    );

    //this will return a list of promises. we have to resolve all together

    const tmdbResults = await Promise.all(allPromises);

    // dispatch the movielist to redux
    dispatch(
      addTmdbResults({
        movieLists: tmdbResults,
        movieNames: GPTMoviesSuggesstions,
      })
    );
  };
  return (
    <div className="w-[90%] md:w-1/2">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" grid grid-cols-12 w-full"
      >
        <input
          className="col-span-10 py-2 px-4 text-xs md:text-sm border border-red-700 focus:border-red-700"
          ref={searchText}
          type="text"
          placeholder={langValues[lang].placeholder}
        />
        <button
          className="col-span-2 text-white text-2xl bg-red-700 px-0 py-2 "
          type="button"
          onClick={handleGPTResults}
        >
          🔍
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
