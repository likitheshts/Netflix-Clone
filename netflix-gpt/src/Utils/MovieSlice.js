import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    playingMoviesNow: null,
    trailer: null,
  },
  reducers: {
    addPlayingMovie: (state, action) => {
      state.playingMoviesNow = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addPlayingMovie, addTrailer } = MovieSlice.actions;

export default MovieSlice.reducer;
