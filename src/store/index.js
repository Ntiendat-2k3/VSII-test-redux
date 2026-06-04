import { configureStore } from '@reduxjs/toolkit';
import breedReducer from './slices/breedSlice';

const store = configureStore({
  reducer: {
    breeds: breedReducer,
  },
});

export default store;
