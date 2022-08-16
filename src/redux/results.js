import { createSlice } from '@reduxjs/toolkit';

export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    results: '',
  },
  reducers: {
    updateResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateResults } = resultsSlice.actions;

export default resultsSlice.reducer;
