import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let CrePro = createAsyncThunk("Addproduct", async (formData) => {
  let config = {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
      "Access-Control-Allow-Headers":
        "Content-Type , X-Auth-Token,Origin,Authorization ,multipart/form-data",
    },
  };
  let res = await BaseURL.post("/api/v1/products", formData, config);
  console.log(res.status);
  return res;
});

export let PostProsSlice = createSlice({
  name: "Addproduct",
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
