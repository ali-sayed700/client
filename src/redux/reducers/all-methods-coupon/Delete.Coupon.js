import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let DeleteCoupon = createAsyncThunk(
  "post coupon",
  async (id, { rejectWithValue }) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      let res = await baseURL.delete(`/api/v1/coupons/${id}`, config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let DeleteCouponsSlice = createSlice({
  name: "post coupon",
  initialState: {
    deleCoupon: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(DeleteCoupon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(DeleteCoupon.fulfilled, (state, action) => {
      state.deleCoupon = action.payload;
      state.loading = false;
    });
    builder.addCase(DeleteCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default DeleteCouponsSlice.reducer;
