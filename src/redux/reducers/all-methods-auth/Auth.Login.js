import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let Login = createAsyncThunk(
  "register",
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
      let res = await baseURL.post("/api/v1/auth/login", formData, config);
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
