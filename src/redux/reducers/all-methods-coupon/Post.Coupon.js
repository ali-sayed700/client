import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let PostCoupon = createAsyncThunk(
  "post coupon",
  async (formData, { rejectWithValue }) => {
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
      let res = await baseURL.post("/api/v1/coupons", formData, config);
      return res;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let PostCouponsSlice = createSlice({
  name: "post coupon",
  initialState: {
    coupon: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(PostCoupon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PostCoupon.fulfilled, (state, action) => {
      state.coupon = action.payload;
      state.loading = false;
    });
    builder.addCase(PostCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default PostCouponsSlice.reducer;
