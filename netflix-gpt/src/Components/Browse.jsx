import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
