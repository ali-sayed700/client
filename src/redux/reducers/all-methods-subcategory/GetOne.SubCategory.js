import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../../api/baseURL";

export let GetOneSubCateg = createAsyncThunk("GetOneSubCateg", async (val) => {
  let config = {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
      "Access-Control-Allow-Headers":
        "Content-Type , X-Auth-Token,Origin,Authorization ,multipart/form-data",
    },
  };
  let res = await baseUrl.get(val, config);

  return res.data;
});

export let GetOneSubCategSlice = createSlice({
  name: "GetOneSubCateg",
  initialState: {
    CateOne: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetOneSubCateg.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetOneSubCateg.fulfilled, (state, action) => {
      state.CateOne = action.payload;

      state.loading = false;
    });
    builder.addCase(GetOneSubCateg.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default GetOneSubCategSlice.reducer;
