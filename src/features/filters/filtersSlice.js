import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterByName: "",
  filterByCategory: "Усі жанри",
  sort: { name: "более популярным", sortProperty: "rating" },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterByName(state, action) {
      state.filterByName = action.payload;
    },
    setFilterByCategory(state, action) {
      state.filterByCategory = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setFilterByName, setFilterByCategory, setSort } =
  filtersSlice.actions;

export default filtersSlice.reducer;
