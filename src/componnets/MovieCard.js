import React from "react";
import { IMG_CDN_URL } from "../utilities/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-52 pr-[0.2%]  bg-cover">
      <img className="" alt="movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
