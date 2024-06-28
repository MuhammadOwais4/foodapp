import { createSlice } from '@reduxjs/toolkit';


let initialState = {
  cart: [
    { id: 1, name: 'Beef Burger', description: 'Delicious Good beef burgers', imageUrl: require('../images/Beef_burgur.png'), price: 10, quantity: 1 }
  ]
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeTocart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    AddTocart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { AddTocart, removeTocart } = userSlice.actions;
export default userSlice.reducer;
