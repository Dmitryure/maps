import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: { shown: false },
  reducers: {
    show: (state) => {
      return { shown: !state.shown };
    },
  },
});

console.log(modalSlice.actions);
