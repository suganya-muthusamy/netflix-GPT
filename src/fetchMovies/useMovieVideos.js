import { useEffect } from "react";
import { OPTION_KEY } from "../utilities/constants";
import { addAllVideos, addTrailerVideo } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieVideos = () => {
  const dispatch = useDispatch();
  const movieVideos = async () => {
    // fetch the list of videos
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/786892/videos?language=en-US",
      OPTION_KEY
    );
    const json = await data.json();

    // filter the 'Trailer' videos

    dispatch(addAllVideos(json));

    const trailerVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );

    // filter just one Trailer video

    const finalTrailerVideo = trailerVideos.length
      ? trailerVideos[0]
      : json.results[0];

    dispatch(addTrailerVideo(finalTrailerVideo));
  };

  useEffect(() => {
    movieVideos();
  }, []);
};

export default useMovieVideos;
