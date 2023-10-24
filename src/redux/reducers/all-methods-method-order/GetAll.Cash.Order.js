import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let GetAllCashOrder = createAsyncThunk(
  "get cash order",
  async (form, { rejectWithValue }) => {
    let config = {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
        "Access-Control-Allow-Headers":
          "Content-Type , X-Auth-Token,Origin,Authorization ,multipart/form-data",
      },
    };
    try {
      let res = await baseURL.get(form, config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let GetCashOrderSlice = createSlice({
  name: "get cart",
  initialState: {
    getCash: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetAllCashOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetAllCashOrder.fulfilled, (state, action) => {
      state.getCash = action.payload;
      state.loading = false;
    });
    builder.addCase(GetAllCashOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default GetCashOrderSlice.reducer;
