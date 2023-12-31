import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let GetReview = createAsyncThunk(
  "get review",
  async (formData, { rejectWithValue }) => {
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
      let res = await baseURL.get(formData, config);
      // console.log(res);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let GetReviewSlice = createSlice({
  name: "get review",
  initialState: {
    showReview: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetReview.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetReview.fulfilled, (state, action) => {
      state.showReview = action.payload;
      state.loading = false;
    });
    builder.addCase(GetReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default GetReviewSlice.reducer;
