import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let ViewAllProdBrand = createAsyncThunk(
  "ViewAllProdBrandSlice",
  async (id) => {
    let res = await BaseURL.get(id);
    return res.data;
  }
);

export let ViewAllProdBrandSlice = createSlice({
  name: "ViewAllProdBrandSlice",
  initialState: {
    viewAllProd: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(ViewAllProdBrand.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ViewAllProdBrand.fulfilled, (state, action) => {
      state.viewAllProd = action.payload;

      state.loading = false;
    });
    builder.addCase(ViewAllProdBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default ViewAllProdBrandSlice.reducer;
