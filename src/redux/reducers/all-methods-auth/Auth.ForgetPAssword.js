import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let ForgetPass = createAsyncThunk(
  "forgetpassowrd",
  async (formData, { rejectWithValue }) => {
    // let config = {
    //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    // };
    try {
      let res = await baseURL.post("/api/v1/auth/forgotPasswords", formData);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let ForgetPassSlice = createSlice({
  name: "forgetpassowrd",
  initialState: {
    forgetpass: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(ForgetPass.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ForgetPass.fulfilled, (state, action) => {
      state.forgetpass = action.payload;
      state.loading = false;
    });
    builder.addCase(ForgetPass.rejected, (state, action) => {
      // console.log(action.payload.response.data.errors);

      state.loading = false;

      state.error = action.payload.response.data;
    });
  },
});

export default ForgetPassSlice.reducer;
