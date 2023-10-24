import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let PostCashOrder = createAsyncThunk(
  "post cash order",
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
      let res = await baseURL.post(
        `/api/v1/orders/${formData.id}`,
        formData.data,
        config
      );
      console.log(res);
      return res;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let PostCashOrderSlice = createSlice({
  name: "post cash order",
  initialState: {
    cashOrder: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(PostCashOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PostCashOrder.fulfilled, (state, action) => {
      state.cashOrder = action.payload;
      state.loading = false;
    });
    builder.addCase(PostCashOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default PostCashOrderSlice.reducer;
