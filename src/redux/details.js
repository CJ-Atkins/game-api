import { createSlice } from '@reduxjs/toolkit';

export const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    details: '',
  },
  reducers: {
    reducerUpdateDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducerUpdateDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
