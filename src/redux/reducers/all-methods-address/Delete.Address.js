import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let DeleteAddress = createAsyncThunk(
  "delete address",
  async (id, { rejectWithValue }) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      let res = await baseURL.delete(`/api/v1/addresses/${id}`, config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let DeleteAddressSlice = createSlice({
  name: "delete address",
  initialState: {
    deleAddress: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(DeleteAddress.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(DeleteAddress.fulfilled, (state, action) => {
      state.deleAddress = action.payload;
      state.loading = false;
    });
    builder.addCase(DeleteAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default DeleteAddressSlice.reducer;
