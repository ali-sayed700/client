import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let GetAllBrnd = createAsyncThunk("brands", async (val) => {
  let res = await baseURL.get(val);
  return res.data;
});

export let BrandsSlice = createSlice({
  name: "brands",
  initialState: {
    arr: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(GetAllBrnd.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetAllBrnd.fulfilled, (state, action) => {
      state.arr = action.payload;
      state.loading = false;
    });
    builder.addCase(GetAllBrnd.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default BrandsSlice.reducer;
