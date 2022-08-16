import { createSlice } from '@reduxjs/toolkit';

export const nextPageSlice = createSlice({
  name: 'nextpage',
  initialState: {
    nextpage: null,
  },
  reducers: {
    reducerUpdateNextPage: (state, action) => {
      state.nextpage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducerUpdateNextPage } = nextPageSlice.actions;

export default nextPageSlice.reducer;
