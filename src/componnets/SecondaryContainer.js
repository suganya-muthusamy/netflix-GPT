import React from "react";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const data = useSelector((appStore) => appStore.movies?.nowPlayingMovies);
  console.log("SUganua");
  console.log("data" + data);
  return <div>SecondaryContainer</div>;
};

export default SecondaryContainer;
