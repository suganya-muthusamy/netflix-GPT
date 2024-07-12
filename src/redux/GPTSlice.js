import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPTSlice",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGPTSearch } = GPTSlice.actions;
export default GPTSlice.reducer;
