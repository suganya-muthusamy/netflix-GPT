import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPTSlice",
  initialState: {
    showGPTSearch: false,
    movieLists: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },

    addTmdbResults: (state, action) => {
      const { movieLists, movieNames } = action.payload;
      state.movieLists = movieLists;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGPTSearch, addTmdbResults } = GPTSlice.actions;
export default GPTSlice.reducer;
