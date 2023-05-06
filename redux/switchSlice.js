import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
}

export const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    }
  }
})

export const { open, close } = switchSlice.actions
export default switchSlice.reducer 