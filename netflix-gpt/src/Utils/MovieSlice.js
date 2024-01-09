import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    playingMoviesNow: null,
    trailer: null,
    popularMovies: null,
    topRated: null,
    upcomingMovies: null,
    searchMovieList: null,
  },
  reducers: {
    addPlayingMovie: (state, action) => {
      state.playingMoviesNow = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addSearchMovie: (state, action) => {
      state.searchMovieList = action.payload;
    },
  },
});

export const {
  addPlayingMovie,
  addTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addSearchMovie,
} = MovieSlice.actions;

export default MovieSlice.reducer;
