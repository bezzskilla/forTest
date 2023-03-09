import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initialState";

const cartSlice = createSlice({
  name: "cart",
  initialState: initState.cart,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload)

      return state;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const getCartSelector = (state) => {
  console.log(state);

  return state.cart
}
export const cartReducer = cartSlice.reducer;
