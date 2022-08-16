import { createSlice } from '@reduxjs/toolkit';

export const prevPageSlice = createSlice({
  name: 'prevpage',
  initialState: {
    prevpage: null,
  },
  reducers: {
    reducerUpdatePrevPage: (state, action) => {
      state.prevpage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducerUpdatePrevPage } = prevPageSlice.actions;

export default prevPageSlice.reducer;
