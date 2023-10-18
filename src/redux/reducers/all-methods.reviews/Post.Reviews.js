import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let PostReview = createAsyncThunk(
  "post review",
  async (formData, { rejectWithValue }) => {
    // console.log(formData);

    let config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    try {
      let res = await baseURL.post(
        `/api/v1/products/${formData.id}/reviews`,
        formData.formRv,
        config
      );
      // console.log(res);
      return res;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let PostReviewSlice = createSlice({
  name: "post review",
  initialState: {
    review: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(PostReview.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PostReview.fulfilled, (state, action) => {
      state.review = action.payload;
      state.loading = false;
    });
    builder.addCase(PostReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default PostReviewSlice.reducer;
