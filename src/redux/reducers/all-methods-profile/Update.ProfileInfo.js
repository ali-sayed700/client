import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let UpdateProfileInfo = createAsyncThunk(
  "UpdateProfileInfo",
  async (formData, { rejectWithValue }) => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      let res = await baseURL.put(`/api/v1/users/updateMe`, formData, config);
      return res;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let UpdateProfileInfoSlice = createSlice({
  name: "UpdateProfileInfo",
  initialState: {
    UpdInfo: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(UpdateProfileInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdateProfileInfo.fulfilled, (state, action) => {
      state.UpdInfo = action.payload;
      state.loading = false;
    });
    builder.addCase(UpdateProfileInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});

export default UpdateProfileInfoSlice.reducer;
