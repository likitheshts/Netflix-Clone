import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
  name: "search",
  initialState: {
    toggleSearch: false,
  },
  reducers: {
    toggleSearchButton: (state, action) => {
      state.toggleSearch = !state.toggleSearch;
    },
  },
});

export const { toggleSearchButton } = GPTSearchSlice.actions;

export default GPTSearchSlice.reducer;
