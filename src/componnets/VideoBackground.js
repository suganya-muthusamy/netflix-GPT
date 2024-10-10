import { useEffect, useState } from "react";
import useMovieVideos from "../fetchMovies/useMovieVideos";
import { IMG_CDN_URL } from "../utilities/constants";

const VideoBackground = ({ key, posterPath }) => {
  useMovieVideos();
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="relative h-0 pb-[56.25%]">
      {isMobile ? (
        <div className="bg-black-transparent  flex justify-center items-center ">
          <span className="absolute">▶️</span>
          <img
            className="aspect-auto py-28 mt-0 bg-transparent"
            alt="poster"
            src={IMG_CDN_URL + posterPath}
          />
        </div>
      ) : (
        <iframe
          className="-z-10 absolute top-0 bottom-0 w-full h-full"
          width="100%"
          height="100%"
          src={
            "https://www.youtube-nocookie.com/embed/LYV3001u574?si=" +
            key +
            "&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
