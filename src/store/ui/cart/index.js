import { createSlice } from "@reduxjs/toolkit";
import { decrementDish } from "./actions";

const initialState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] + 1 : 1;
    },
    decrementDish: (state, { payload }) => {
      state[payload] = state[payload] ? state[payload] - 1 : 0;
    },
  },
});
  