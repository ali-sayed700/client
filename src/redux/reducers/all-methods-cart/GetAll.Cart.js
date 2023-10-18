import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let GetAllCarts = createAsyncThunk(
  "get cart",
  async (form, { rejectWithValue }) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      let res = await baseURL.get("/api/v1/cart", config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let GetCartSlice = createSlice({
  name: "get cart",
  initialState: {
    getCart: [],
    loading: false,
    err: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetAllCarts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetAllCarts.fulfilled, (state, action) => {
      state.getCart = action.payload;
      state.loading = false;
    });
    builder.addCase(GetAllCarts.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload.response;
    });
  },
});

export default GetCartSlice.reducer;
