import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import baseUrl from "../../api/baseURL";
import baseUrl from "../../../api/baseURL";

export let GetAllCg = createAsyncThunk("cateogery", async (val) => {
  let res = await baseUrl.get(val);
  return res.data;
});

export let CategorySlice = createSlice({
  name: "cateogery",
  initialState: {
    arr: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(GetAllCg.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(GetAllCg.fulfilled, (state, action) => {
      state.arr = action.payload;
      state.loading = true;
    });
    builder.addCase(GetAllCg.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default CategorySlice.reducer;
