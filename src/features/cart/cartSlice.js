import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (game) => game.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice += action.payload.price;
    },
    minusItem(state, action) {
      const findItem = state.items.find(
        (game) => game.id === action.payload.id
      );

      if (findItem.count > 1) {
        findItem.count--;
      } else {
        const filteredState = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.items = filteredState;
      }
      state.totalPrice -= action.payload.price;
    },
    removeItem(state, action) {
      const filteredState = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = filteredState;

      state.totalPrice -= action.payload.count * action.payload.price;
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
