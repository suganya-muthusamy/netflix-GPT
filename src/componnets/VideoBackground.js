import useMovieVideos from "../fetchMovies/useMovieVideos";

const VideoBackground = ({ key }) => {
  useMovieVideos();

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video border-none p-0 m-0"
        src={
          "https://www.youtube.com/embed/LYV3001u574?si=" +
          key +
          "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
