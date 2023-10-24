import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let Register = createAsyncThunk(
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
      let res = await baseURL.post("/api/v1/auth/signup", formData, config);
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let PostRegisterSlice = createSlice({
  name: "register",
  initialState: {
    register: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(Register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(Register.fulfilled, (state, action) => {
      state.register = action.payload;
      state.loading = false;
    });
    builder.addCase(Register.rejected, (state, action) => {
      // console.log(action.payload.response.data.errors);

      state.loading = false;
      state.error = action.payload.response.data.errors;
    });
  },
});

export default PostRegisterSlice.reducer;
// "accept only egypt phone numbers";
// "E-mail already in use".payload.response.data.errors;
