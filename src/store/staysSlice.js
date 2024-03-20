import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../data/stays.json";

export const fetchAllStays = createAsyncThunk(
  "fetchAllStays",
  async (apiURL) => {
    const response = await fetch(apiURL);
    return response.json();
  }
);

const staysSlice = createSlice({
  name: "stays",
  initialState: {
    staysList: [],
    location: "Helsinki, Finland",
    guests: {},
    fetchStatus: "",
  },
  reducers: {
    filterStays: (state, action) => {},
    setGuestNumber: (state, action) => {
      state.guests[action.payload.type] = action.payload.count;
    },
    setLocationUsingButton: (state, action) => {
      state.location = action.payload.location;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStays.fulfilled, (state, action) => {
        state.staysList = action.payload;
        state.fetchStatus = "success";
      })
      .addCase(fetchAllStays.pending, (state, action) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchAllStays.rejected, (state, action) => {
        state.staysList = data;
        state.fetchStatus = "error";
      });
  },
});

export default staysSlice;
