import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let GetCoupon = createAsyncThunk(
  "get coupon",
  async (form, { rejectWithValue }) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      let res = await baseURL.get(form, config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let GetCouponsSlice = createSlice({
  name: "get coupon",
  initialState: {
    getCoupon: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetCoupon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetCoupon.fulfilled, (state, action) => {
      state.getCoupon = action.payload;
      state.loading = false;
    });
    builder.addCase(GetCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default GetCouponsSlice.reducer;
