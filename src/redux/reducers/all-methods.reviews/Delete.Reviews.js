import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let DelReview = createAsyncThunk(
  "delete review",
  async (id, { rejectWithValue }) => {
    // console.log(formData);

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
      let res = await baseURL.delete(`/api/v1/reviews/${id}`, config);
      // console.log(res);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let DeleReviewSlice = createSlice({
  name: "get review",
  initialState: {
    showDelReview: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(DelReview.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(DelReview.fulfilled, (state, action) => {
      state.showDelReview = action.payload;
      state.loading = false;
    });
    builder.addCase(DelReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default DeleReviewSlice.reducer;
