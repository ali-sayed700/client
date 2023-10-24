import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../../api/baseURL";

export let UpdatePass = createAsyncThunk(
  "updatepassword",
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
        "/api/v1/auth/resetPassword",
        formData,
        config
      );
      return res.data;
    } catch (err) {
      throw rejectWithValue(err);
    }
  }
);

export let UpdatePassSlice = createSlice({
  name: "updatepassword",
  initialState: {
    newPass: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(UpdatePass.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdatePass.fulfilled, (state, action) => {
      state.newPass = action.payload;
      state.loading = false;
    });
    builder.addCase(UpdatePass.rejected, (state, action) => {
      // console.log(action.payload.response.data.errors);

      state.loading = false;
      state.error = action.payload.response.data.errors;
    });
  },
});

export default UpdatePassSlice.reducer;
// "accept only egypt phone numbers";
// "E-mail already in use".payload.response.data.errors;
