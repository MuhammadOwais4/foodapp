import { createSlice } from '@reduxjs/toolkit';
import Beef_burger from '../images/Beef_burgur.png';
import Chicken_burger from '../images/Chicken_burger.png';
import Veggie_burger from '../images/Veggie_burger.png';
import AcharGosht from '../images/Achar-Gosht.png';
import Daalchawal from '../images/Daalchawal.png';

let initialState = {
  cart: [
    { id: 1, name: 'Beef Burger', description: 'Delicious Good beef burgers', imageUrl: Beef_burger, price: '$10', quantity: 1 },
    { id: 2, name: 'Chicken Burger', description: 'Delicious Good Chicken burgers', imageUrl: Chicken_burger, price: '$10', quantity: 1 },
    { id: 3, name: 'Veggie Burger', description: 'Delicious Good Veggie burgers', imageUrl: Veggie_burger, price: '$10', quantity: 1 },
    { id: 4, name: 'Achar Gosht', description: 'Delicious Good Achar Gosht', imageUrl: AcharGosht, price: '$10', quantity: 1 },
    { id: 5, name: 'Daal-chawal', description: 'Delicious Good Daal chawal', imageUrl: Daalchawal, price: '$10', quantity: 1 }
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
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { AddTocart, removeTocart, clearCart } = userSlice.actions;
export default userSlice.reducer;
