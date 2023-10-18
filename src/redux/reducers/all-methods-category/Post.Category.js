import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../../api/baseURL";

export let PostACg = createAsyncThunk("Postcateogery", async (formData) => {
  let config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  let res = await baseUrl.post("/api/v1/categories", formData, config);
  return res;
});

export let PostCgSlice = createSlice({
  name: "Postcateogery",
  initialState: {
    arr: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(PostACg.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PostACg.fulfilled, (state, action) => {
      state.arr = action.payload;
      state.loading = false;
    });
    builder.addCase(PostACg.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default PostCgSlice.reducer;
