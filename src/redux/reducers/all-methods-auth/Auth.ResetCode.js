import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let ResetCode = createAsyncThunk(
  "resetCode",
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
      let res = await baseURL.post(
        "/api/v1/auth/verifyResetCode",
        formData,
        config
      );
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let resetCodePassSlice = createSlice({
  name: "resetCode",
  initialState: {
    resetCodePass: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(ResetCode.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ResetCode.fulfilled, (state, action) => {
      state.resetCodePass = action.payload;
      state.loading = false;
    });
    builder.addCase(ResetCode.rejected, (state, action) => {
      // console.log(action.payload.response.data.errors);

      state.loading = false;

      state.error = action.payload.response.data;
    });
  },
});

export default resetCodePassSlice.reducer;
