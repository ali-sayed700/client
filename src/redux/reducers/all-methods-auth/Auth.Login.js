import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let Login = createAsyncThunk(
  "register",
  async (formData, { rejectWithValue }) => {
    try {
      let res = await baseURL.post("/api/v1/auth/login", formData);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let PostLoginSlice = createSlice({
  name: "Login",
  initialState: {
    login: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(Login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(Login.fulfilled, (state, action) => {
      state.login = action.payload;
      state.loading = false;
    });
    builder.addCase(Login.rejected, (state, action) => {
      // console.log(action.payload.response.data.errors);

      state.loading = false;

      state.error = action.payload.response.data;
    });
  },
});

export default PostLoginSlice.reducer;
