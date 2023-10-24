import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let UpdateCoupon = createAsyncThunk(
  "update coupon",
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
      let res = await baseURL.put(
        `/api/v1/coupons/${formData.id}`,
        formData.data,
        config
      );
      return res;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let UpdateCouponsSlice = createSlice({
  name: "update coupon",
  initialState: {
    UpdCoupon: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(UpdateCoupon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdateCoupon.fulfilled, (state, action) => {
      state.UpdCoupon = action.payload;
      state.loading = false;
    });
    builder.addCase(UpdateCoupon.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  },
});

export default UpdateCouponsSlice.reducer;
