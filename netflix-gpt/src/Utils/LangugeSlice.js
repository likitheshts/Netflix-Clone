import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
  name: "language",
  initialState: "en",
  reducers: {
    updateLanguage: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateLanguage } = LanguageSlice.actions;

export default LanguageSlice.reducer;
