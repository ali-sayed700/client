import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let PostAddress = createAsyncThunk(
  "post address",
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
      let res = await baseURL.post("/api/v1/addresses", formData, config);
      return res;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let PostAddressSlice = createSlice({
  name: "post address",
  initialState: {
    addAddress: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(PostAddress.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PostAddress.fulfilled, (state, action) => {
      state.addAddress = action.payload;
      state.loading = false;
    });
    builder.addCase(PostAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default PostAddressSlice.reducer;
