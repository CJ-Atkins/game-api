import { createSlice } from '@reduxjs/toolkit';

export const platformsSlice = createSlice({
  name: 'platforms',
  initialState: {
    platforms: '1,2,3,7',
    // parent_platforms 1 = pc, 2 = playstation, 3 = xbox, 7 = nintendo
  },
  reducers: {
    reducerPlatformsPC: (state) => {
      state.platforms = '1';
    },
    reducerPlatformsPS: (state) => {
      state.platforms = '2';
    },
  },
});

// Action creators are generated for each case reducer function
export const { reducerPlatformsPC, reducerPlatformsPS } =
  platformsSlice.actions;

export default platformsSlice.reducer;
