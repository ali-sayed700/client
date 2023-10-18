import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let UpdateOrderToPay = createAsyncThunk(
  "update order to pay",
  async (id, { rejectWithValue }) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      let res = await baseURL.put(`/api/v1/orders/${id}/pay`, "", config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let UpdateOrderPaySlice = createSlice({
  name: "update order to pay",
  initialState: {
    UpdatePay: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(UpdateOrderToPay.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdateOrderToPay.fulfilled, (state, action) => {
      state.UpdatePay = action.payload;
      state.loading = false;
    });
    builder.addCase(UpdateOrderToPay.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  },
});

export default UpdateOrderPaySlice.reducer;
