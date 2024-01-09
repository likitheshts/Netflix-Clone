import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MovieSlice from "./MovieSlice";
import GPTSearchSlice from "./GPTSearchSlice";
import LangugeSlice from "./LangugeSlice";

const Store = configureStore({
  reducer: {
    user: UserSlice,
    movies: MovieSlice,
    search: GPTSearchSlice,
    language: LangugeSlice,
  },
});

export default Store;
