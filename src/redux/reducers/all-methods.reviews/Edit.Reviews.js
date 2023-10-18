import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let EditReview = createAsyncThunk(
  "post review",
  async (formData, { rejectWithValue }) => {
    // console.log(formData);

    let config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    try {
      let res = await baseURL.put(
        `/api/v1/reviews/${formData.id}`,
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

export let EditReviewSlice = createSlice({
  name: "post review",
  initialState: {
    editRev: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(EditReview.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(EditReview.fulfilled, (state, action) => {
      state.editRev = action.payload;
      state.loading = false;
    });
    builder.addCase(EditReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default EditReviewSlice.reducer;
