import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let GetOneProd = createAsyncThunk("prodone", async (id) => {
  let res = await BaseURL.get(id);
  return res.data;
});

export let GetOneProdsSlice = createSlice({
  name: "prodone",
  initialState: {
    getOneProd: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetOneProd.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetOneProd.fulfilled, (state, action) => {
      state.getOneProd = action.payload;
      state.loading = false;
    });
    builder.addCase(GetOneProd.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default GetOneProdsSlice.reducer;
