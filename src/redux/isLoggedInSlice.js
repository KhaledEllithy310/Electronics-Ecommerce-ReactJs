import { createSlice } from "@reduxjs/toolkit";

export const isLoggedInSlice = createSlice({
  name: "counter",
  initialState: {
    status: false,
  },
  reducers: {
    logIn: (state) => {
      state.status = true;
    },
    logOut: (state) => {
      state.status = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
