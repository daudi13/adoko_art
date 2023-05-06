import { configureStore } from "@reduxjs/toolkit";
import switchReducer from '@/redux/switchSlice';

export const store = configureStore({
  reducer: {
    navSwitch: switchReducer,
  }
})