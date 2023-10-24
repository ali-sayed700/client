import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let GetMe = createAsyncThunk(
  "Login",
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
      let res = await baseURL.get("/api/v1/users/getMe", config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let GetMeSlice = createSlice({
  name: "Login",
  initialState: {
    getme: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(GetMe.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetMe.fulfilled, (state, action) => {
      state.getme = action.payload;
      state.loading = false;
    });
    builder.addCase(GetMe.rejected, (state, action) => {
      // console.log(action.payload.response.data.errors);

      state.loading = false;

      state.error = action.payload.response.data;
    });
  },
});

export default GetMeSlice.reducer;
