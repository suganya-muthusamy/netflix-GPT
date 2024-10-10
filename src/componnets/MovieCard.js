import React from "react";
import { IMG_CDN_URL } from "../utilities/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <img
      className="w-32 m-1 "
      alt="movie card"
      src={IMG_CDN_URL + posterPath}
    />
  );
};

export default MovieCard;
