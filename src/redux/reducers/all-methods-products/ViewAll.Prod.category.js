import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let ViewAllProdCategory = createAsyncThunk(
  "ViewAllProdCategorySlice",
  async (id) => {
    let res = await BaseURL.get(id);
    return res.data;
  }
);

export let ViewAllProdCategorySlice = createSlice({
  name: "ViewAllProdCategorySlice",
  initialState: {
    viewAllProd: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(ViewAllProdCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ViewAllProdCategory.fulfilled, (state, action) => {
      state.viewAllProd = action.payload;

      state.loading = false;
    });
    builder.addCase(ViewAllProdCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default ViewAllProdCategorySlice.reducer;
