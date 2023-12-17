// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import regionReducer from './reducers';

const store = configureStore({
  reducer: {
    region: regionReducer,
  },
});

export default store;