import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
     name: "cartRedux",
     initialState: { cartItems: ["iii"] },
     reducers: {
          addToCart: (state, action) => {
               state.cartItems = [...state.cartItems, action.payload];
          },
          removeFromCart: (state, action) => {
               state.cartItems = state.cartItems.filter(
                    (e) => e.id !== action.payload
               );
          },
     },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
