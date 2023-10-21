import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let GetCardOrder = createAsyncThunk(
  "post Card order",
  async (formData, { rejectWithValue }) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    try {
      let res = await baseURL.get(
        `/api/v1/orders/checkout-session/${formData.id}`,

        formData.data,
        config
      );
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let GetCardOrderSlice = createSlice({
  name: "post Card order",
  initialState: {
    CardOrder: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetCardOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetCardOrder.fulfilled, (state, action) => {
      state.CardOrder = action.payload;
      state.loading = false;
    });
    builder.addCase(GetCardOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  },
});

export default GetCardOrderSlice.reducer;
