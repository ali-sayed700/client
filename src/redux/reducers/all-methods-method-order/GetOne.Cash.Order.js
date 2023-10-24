import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let GetOneCashOrder = createAsyncThunk(
  "getone cash order",
  async (id, { rejectWithValue }) => {
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
      let res = await baseURL.get(`/api/v1/orders/${id}`, config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let GetOneCashOrderSlice = createSlice({
  name: "getone",
  initialState: {
    getOneCash: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetOneCashOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetOneCashOrder.fulfilled, (state, action) => {
      state.getOneCash = action.payload;
      state.loading = false;
    });
    builder.addCase(GetOneCashOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default GetOneCashOrderSlice.reducer;
