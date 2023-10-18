import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../../api/baseURL";

export let PostSubcategory = createAsyncThunk(
  "subcategory",
  async (formData) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    let res = await baseUrl.post("api/v1/subcategories", formData, config);

    return res;
  }
);

export let PostSubcategorySlice = createSlice({
  name: "subcategory",
  initialState: {
    arr: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(PostSubcategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PostSubcategory.fulfilled, (state, action) => {
      state.arr = action.payload;
      state.loading = false;
    });
    builder.addCase(PostSubcategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default PostSubcategorySlice.reducer;
