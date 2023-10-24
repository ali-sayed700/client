import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let UpdateProfilePass = createAsyncThunk(
  "UpdateProfilePass",
  async (formData, { rejectWithValue }) => {
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
      let res = await baseURL.put(
        `/api/v1/users/changeMyPassword`,
        formData,
        config
      );
      return res;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let UpdateProfilePassSlice = createSlice({
  name: "UpdateProfilePass",
  initialState: {
    UpdPass: [],
    loading: false,
    err: "",
  },

  extraReducers: (builder) => {
    builder.addCase(UpdateProfilePass.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdateProfilePass.fulfilled, (state, action) => {
      state.UpdPass = action.payload;
      state.loading = false;
    });
    builder.addCase(UpdateProfilePass.rejected, (state, action) => {
      state.loading = false;
      state.err = action.payload.response;
    });
  },
});

export default UpdateProfilePassSlice.reducer;
