import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://5f59fac6-db1a-4045-9fe9-2941b2de0601.mock.pstmn.io/games"
      );

      if (!response.ok) {
        throw new Error("Server Error");
      }

      // if (response.ok) {
      //   console.log("ok");
      // }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    status: "loading",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      // console.log("PENDING::: ");
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      // console.log("FULLFILLED::: ", action.payload);
      state.status = "resolved";
      state.games.push(action.payload);
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      // console.log("ERROR::: ", action.payload);
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export default gamesSlice.reducer;
