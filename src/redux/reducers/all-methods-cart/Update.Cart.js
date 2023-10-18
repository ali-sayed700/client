import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let UpdateCart = createAsyncThunk(
  "update Cart",
  async (formData, { rejectWithValue }) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      let res = await baseURL.put(
        `/api/v1/cart/${formData.id}`,
        formData.data,
        config
      );
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let UpdateCartSlice = createSlice({
  name: "update Cart",
  initialState: {
    UpdCart: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(UpdateCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdateCart.fulfilled, (state, action) => {
      state.UpdCart = action.payload;
      state.loading = false;
    });
    builder.addCase(UpdateCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  },
});

export default UpdateCartSlice.reducer;
