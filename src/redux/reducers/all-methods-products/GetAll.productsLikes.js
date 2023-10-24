import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let GetProductLike = createAsyncThunk("productOne", async (id) => {
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

export let GetAllProdLikeSlice = createSlice({
  name: "productOne",
  initialState: {
    prodLike: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetProductLike.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetProductLike.fulfilled, (state, action) => {
      state.prodLike = action.payload;

      state.loading = false;
    });
    builder.addCase(GetProductLike.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default GetAllProdLikeSlice.reducer;
