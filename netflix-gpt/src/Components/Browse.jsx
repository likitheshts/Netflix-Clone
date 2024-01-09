import { useSelector } from "react-redux";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import usePopularMovies from "../CustomHooks/usePopularMovies";
import useTopRated from "../CustomHooks/useTopRated";
import useUpcomingMovies from "../CustomHooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const GPTSearchToggle = useSelector((store) => store.search.toggleSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {GPTSearchToggle ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
       MainContainer:
          -VideoBackground
          -VideoTitle
       SecondaryContainer:
          -MovieLists * N
          -Cards * N
      */}
    </div>
  );
};

export default Browse;
