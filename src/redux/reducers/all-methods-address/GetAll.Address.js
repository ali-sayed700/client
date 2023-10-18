import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let GetAddress = createAsyncThunk(
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

export let GetAddressSlice = createSlice({
  name: "get coupon",
  initialState: {
    getOneAddress: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetAddress.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetAddress.fulfilled, (state, action) => {
      state.getOneAddress = action.payload;
      state.loading = false;
    });
    builder.addCase(GetAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default GetAddressSlice.reducer;
