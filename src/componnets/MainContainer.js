import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const { nowPlayingMovies, trailerVideos } = useSelector(
    (appStore) => appStore.movies
  );

  if (nowPlayingMovies === null) return;

  const videoKey = trailerVideos?.key;

  const mainMovie = nowPlayingMovies?.results[0];
  const { original_title, overview } = mainMovie;
  return (
    <div className=" text-white overflow-hidden ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground posterPath={mainMovie.poster_path} key={videoKey} />
    </div>
  );
};

export default MainContainer;
