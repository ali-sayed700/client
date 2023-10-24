import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let GetOneProd = createAsyncThunk("prodone", async (id) => {
  let config = {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
      "Access-Control-Allow-Headers":
        "Content-Type , X-Auth-Token,Origin,Authorization ,multipart/form-data",
    },
  };
  let res = await BaseURL.get(id, config);
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
