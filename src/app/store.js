import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../features/games/gamesSlice";
import filterReducer from "../features/filters/filtersSlice";
import cartReducer from "../features/cart/cartSlice";

const rootReducer = combineReducers({
  games: gamesReducer,
  filters: filterReducer,
  cart: cartReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
