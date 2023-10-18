import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let CrePro = createAsyncThunk("product", async (formData) => {
  let config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  let res = await BaseURL.post("/api/v1/products", formData, config);
  console.log(res.status);
  return res;
});

export let PostProsSlice = createSlice({
  name: "product",
  initialState: {
    prods: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(CrePro.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(CrePro.fulfilled, (state, action) => {
      state.prods = action.payload;
      // console.log(state.prods);
      state.loading = false;
    });
    builder.addCase(CrePro.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default PostProsSlice.reducer;
