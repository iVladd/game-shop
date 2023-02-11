import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../features/games/gamesSlice";
import filterReducer from "../features/filters/filtersSlice";

const rootReducer = combineReducers({
  games: gamesReducer,
  filters: filterReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
