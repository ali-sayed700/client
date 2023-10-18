import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let PostWishList = createAsyncThunk(
  "wishlist",
  async (id, { rejectWithValue }) => {
    let config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    try {
      let res = await baseURL.post("/api/v1/wishlist", id, config);
      console.log(res);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let PostWishSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(PostWishList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PostWishList.fulfilled, (state, action) => {
      state.loading = false;
      state.wishlist = action.payload;
    });
    builder.addCase(PostWishList.rejected, (state, action) => {
      // console.log(action);
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default PostWishSlice.reducer;
