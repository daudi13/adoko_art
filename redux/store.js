import { configureStore } from "@reduxjs/toolkit";
import switchReducer from './switchSlice';

export const store = configureStore({
  reducer: {
    navSwitch: switchReducer,
  }
})