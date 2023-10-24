import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let UpdateOrderToDeliver = createAsyncThunk(
  "update order to Deliver",
  async (id, { rejectWithValue }) => {
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
      let res = await baseURL.put(`/api/v1/orders/${id}/deliver`, "", config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let UpdateOrderDeliverSlice = createSlice({
  name: "update order to Deliver",
  initialState: {
    UpdateDeliver: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(UpdateOrderToDeliver.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdateOrderToDeliver.fulfilled, (state, action) => {
      state.UpdateDeliver = action.payload;
      state.loading = false;
    });
    builder.addCase(UpdateOrderToDeliver.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  },
});

export default UpdateOrderDeliverSlice.reducer;
