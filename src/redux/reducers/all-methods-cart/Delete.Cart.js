import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let DeleteCarts = createAsyncThunk(
  "delete cart",
  async (id, { rejectWithValue }) => {
    let config = {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
        "Access-Control-Allow-Headers":
          "Content-Type , X-Auth-Token,Origin,Authorization",
      },
    };
    try {
      let res = await baseURL.delete(id, config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let DeleteCartsSlice = createSlice({
  name: "delete cart",
  initialState: {
    deleCart: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(DeleteCarts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(DeleteCarts.fulfilled, (state, action) => {
      state.deleCart = action.payload;
      state.loading = false;
    });
    builder.addCase(DeleteCarts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default DeleteCartsSlice.reducer;
