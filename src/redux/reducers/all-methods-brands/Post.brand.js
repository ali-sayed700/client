import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let PostBrand = createAsyncThunk("postbrands", async (formData) => {
  let config = {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
      "Access-Control-Allow-Headers":
        "Content-Type , X-Auth-Token,Origin,Authorization",
    },
  };

  let res = await baseURL.post("/api/v1/brands", formData, config);
  return res;
});

export let PostBrandsSlice = createSlice({
  name: "postbrands",
  initialState: {
    arr: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(PostBrand.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PostBrand.fulfilled, (state, action) => {
      state.arr = action.payload;
      state.loading = false;
    });
    builder.addCase(PostBrand.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default PostBrandsSlice.reducer;
