import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search';
import resultsReducer from './results';
import platformsReducer from './platforms';
import detailsReducer from './details';
import nextPageReducer from './nextpage';
import prevPageReducer from './prevpage';

export default configureStore({
  reducer: {
    search: searchReducer,
    results: resultsReducer,
    platforms: platformsReducer,
    details: detailsReducer,
    prevpage: prevPageReducer,
    nextpage: nextPageReducer,
  },
});
