import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
  },
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;
