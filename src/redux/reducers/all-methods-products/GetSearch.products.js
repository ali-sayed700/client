import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let GetSearchApi = createAsyncThunk("get Search", async (id) => {

  let config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
      "Access-Control-Allow-Headers":
        "Content-Type , X-Auth-Token,Origin,Authorization ,multipart/form-data",
    },
  };
  let res = await BaseURL.get(id, config);

  return res.data;
});

export let GetSearchProsSlice = createSlice({
  name: "get Search",
  initialState: {
    getSearch: [],
    // prodsLikes: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetSearchApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetSearchApi.fulfilled, (state, action) => {
      state.getSearch = action.payload;
      // state.prodsLikes = action.payload;

      state.loading = false;
    });
    builder.addCase(GetSearchApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default GetSearchProsSlice.reducer;
