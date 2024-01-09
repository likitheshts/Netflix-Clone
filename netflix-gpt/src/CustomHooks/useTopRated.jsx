import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/MovieSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRatedData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedData();
  }, []);
};

export default useTopRated;
