import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let DeletProd = createAsyncThunk(
  "delete product",
  async (id, { rejectWithValue }) => {
    let config = {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
        "Access-Control-Allow-Headers":
          "Content-Type , X-Auth-Token,Origin,Authorization ,multipart/form-data",
      },
    };
    try {
      let res = await BaseURL.delete(`/api/v1/products/${id}`, config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let DeletProdSlice = createSlice({
  name: "delete product",
  initialState: {
    DelProd: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(DeletProd.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(DeletProd.fulfilled, (state, action) => {
      state.loading = false;
      state.DelProd = action.payload;
    });
    builder.addCase(DeletProd.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default DeletProdSlice.reducer;
