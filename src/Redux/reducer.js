// userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  address: {},
  orderDetails: {
    items: [],
    totalAmount: 0,
    transactionId: '',
    date: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeTocart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    AddToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    logoutUser: (state) => {
      state.cart = [];
      state.address = {};
      state.orderDetails = {};
    },
    completeOrder: (state, action) => {
      state.orderDetails = action.payload;
      state.cart = [];
    },
  },
});

export const { AddToCart, removeTocart, clearCart, setAddress, logoutUser, completeOrder } = userSlice.actions;
export default userSlice.reducer;
