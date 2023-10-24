import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let GetAllProduct = createAsyncThunk("product", async (id) => {
  let config = {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
      "Access-Control-Allow-Headers":
        "Content-Type , X-Auth-Token,Origin,Authorization ,multipart/form-data",
    },
  };
  let res = await BaseURL.get(id, config);
  return res.data;
});

export let GetAllProsSlice = createSlice({
  name: "product",
  initialState: {
    prods: [],
    // prodsLikes: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetAllProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetAllProduct.fulfilled, (state, action) => {
      state.prods = action.payload;
      // state.prodsLikes = action.payload;

      state.loading = false;
    });
    builder.addCase(GetAllProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default GetAllProsSlice.reducer;
