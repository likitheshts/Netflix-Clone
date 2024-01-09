import { addTrailer } from "../Utils/MovieSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    if (movieId) {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();

      const filteredTrailers = json.results.filter(
        (trailer) => trailer.type.toLowerCase() === "trailer"
      );
      const filteredTeaser =
        filteredTrailers.length === 0
          ? json.results[0]
          : filteredTrailers.filter(
              (TeaserData) =>
                TeaserData.name.toLowerCase().includes("teaser") ||
                TeaserData.name.toLowerCase().includes("trailer")
            );
      filteredTrailers.length !== 0 && dispatch(addTrailer(filteredTeaser[0]));
    }
  };
  useEffect(() => {
    getMovieVideos(movieId);
  }, []);
};
export default useTrailerVideo;
