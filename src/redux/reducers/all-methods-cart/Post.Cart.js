import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let PostCart = createAsyncThunk(
  "post cart",
  async (formData, { rejectWithValue }) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      let res = await baseURL.post("/api/v1/cart", formData, config);
      return res;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let PostCartSlice = createSlice({
  name: "post cart",
  initialState: {
    cart: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(PostCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PostCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    });
    builder.addCase(PostCart.rejected, (state, action) => {
      state.loading = false;
      console.log(action.payload.response);
      state.error = action.payload.response;
    });
  },
});

export default PostCartSlice.reducer;
