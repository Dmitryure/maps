import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    show: (state) => !state,
  },
});

export const modalTextSlice = createSlice({
  name: "modalText",
  initialState: "Default text lorem ipsum",
  reducers: {
    modalText: (state, action) => {
      return action.payload;
    },
  },
});
