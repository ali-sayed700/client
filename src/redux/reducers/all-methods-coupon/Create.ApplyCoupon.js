import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let CreateApplyCoupon = createAsyncThunk(
  "apply coupon",
  async (formData, { rejectWithValue }) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      let res = await baseURL.put(`/api/v1/cart/applyCoupon`, formData, config);
      return res;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let UpdateApplyCouponSlice = createSlice({
  name: "apply coupon",
  initialState: {
    ApplyCoupon: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(CreateApplyCoupon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(CreateApplyCoupon.fulfilled, (state, action) => {
      state.ApplyCoupon = action.payload;
      state.loading = false;
    });
    builder.addCase(CreateApplyCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  },
});

export default UpdateApplyCouponSlice.reducer;
