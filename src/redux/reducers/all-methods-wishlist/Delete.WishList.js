import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let DeleteWishList = createAsyncThunk(
  "delete wishlist",
  async (id, { rejectWithValue }) => {
    let config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    try {
      let res = await baseURL.delete(`/api/v1/wishlist/${id}`, config);
      console.log(res);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let DeleteWishSlice = createSlice({
  name: "delete wishlist",
  initialState: {
    Delwishlist: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(DeleteWishList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(DeleteWishList.fulfilled, (state, action) => {
      state.Delwishlist = action.payload;
      state.loading = false;
    });
    builder.addCase(DeleteWishList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default DeleteWishSlice.reducer;
