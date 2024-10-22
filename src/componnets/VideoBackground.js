import { useEffect, useState } from "react";
import useMovieVideos from "../fetchMovies/useMovieVideos";
import { IMG_CDN_URL } from "../utilities/constants";

const VideoBackground = ({ key, posterPath }) => {
  useMovieVideos();

  return (
    <>
      <div className="md:hidden bg-black-transparent flex justify-center items-center ">
        <span className="absolute text-4xl">▶️</span>
        <img
          className="aspect-auto pt-24 pb-10 mt-0 bg-transparent"
          alt="poster"
          src={IMG_CDN_URL + posterPath}
        />
      </div>
      <div className="hidden md:block relative h-0 pb-[56.25%]">
        <iframe
          className="-z-10 absolute top-0 bottom-0 w-full h-full"
          width="100%"
          height="100%"
          src={
            "https://www.youtube.com/embed/LYV3001u574?si=" +
            key +
            "&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
