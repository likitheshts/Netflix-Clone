import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesPlayingNowData = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-48 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={moviesPlayingNowData.playingMoviesNow}
        />
        <MovieList
          title={"Popular Movies"}
          movies={moviesPlayingNowData.popularMovies}
        />
        <MovieList title={"Top Rated"} movies={moviesPlayingNowData.topRated} />
        <MovieList
          title={"Upcoming Movies"}
          movies={moviesPlayingNowData.upcomingMovies}
        />
      </div>
    </div>
  );

  {
    /*
  MovieList- Popular
    - MovieCard * N
  MovieList- NowPlaying
  MovieList- Trending
  MovieList- Horror
*/
  }
};

export default SecondaryContainer;
