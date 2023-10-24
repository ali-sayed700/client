import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let UpdateAddress = createAsyncThunk(
  "update Address",
  async (formData, { rejectWithValue }) => {
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
      let res = await baseURL.put(
        `/api/v1/addresses/${formData.id}`,
        formData.data,
        config
      );
      return res;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let UpdateAddressSlice = createSlice({
  name: "update Address",
  initialState: {
    UpdAddress: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(UpdateAddress.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdateAddress.fulfilled, (state, action) => {
      state.UpdAddress = action.payload;
      state.loading = false;
    });
    builder.addCase(UpdateAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  },
});

export default UpdateAddressSlice.reducer;
