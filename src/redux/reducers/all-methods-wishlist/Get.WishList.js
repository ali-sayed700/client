import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let GetWishList = createAsyncThunk(
  "get wishlist",
  async (id, { rejectWithValue }) => {
    let config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    try {
      let res = await baseURL.get("/api/v1/wishlist", config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let GetWishSlice = createSlice({
  name: "get wishlist",
  initialState: {
    getwishlist: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetWishList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetWishList.fulfilled, (state, action) => {
      state.getwishlist = action.payload;
      state.loading = false;
    });
    builder.addCase(GetWishList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default GetWishSlice.reducer;
