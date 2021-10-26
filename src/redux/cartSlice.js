import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
     name: "cartRedux",
     initialState: {
          cartItems: [],
          showCart: false,
          showMobileMenu: false,
     },
     reducers: {
          addToCart: (state, action) => {
               state.cartItems = [...state.cartItems, action.payload];
          },
          removeFromCart: (state, action) => {
               state.cartItems = state.cartItems.filter(
                    (e,i) => i !== action.payload
               );
          },
          toggleShowCart: (state) => {
               state.showCart = !state.showCart;
          },
          toggleShowMobileMenu: (state) => {
               state.showMobileMenu = !state.showMobileMenu;
          },
     },
});

export const { addToCart, removeFromCart ,toggleShowCart, toggleShowMobileMenu} = cartSlice.actions;
export default cartSlice.reducer;
