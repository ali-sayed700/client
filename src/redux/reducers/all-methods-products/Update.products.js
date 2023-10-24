import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseURL from "../../../api/baseURL";

export let UpdateProds = createAsyncThunk(
  "updateProd",
  async ({ id, formData }) => {
    let config = {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
        "Access-Control-Allow-Headers":
          "Content-Type , X-Auth-Token,Origin,Authorization ,multipart/form-data",
      },
    };
    let res = await BaseURL.put(`/api/v1/products/${id}`, formData, config);
    // console.log(res);
    return res;
  }
);

export let UpdateProdsSlice = createSlice({
  name: "updateProd",
  initialState: {
    UpProds: [],
    loading: false,
    error: "",
  },

  extraReducers: (builder) => {
    builder.addCase(UpdateProds.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(UpdateProds.fulfilled, (state, action) => {
      state.UpProds = action.payload;
      // console.log(state.UpProds);
      // console.log(action.payload);
      state.loading = false;
    });
    builder.addCase(UpdateProds.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default UpdateProdsSlice.reducer;
