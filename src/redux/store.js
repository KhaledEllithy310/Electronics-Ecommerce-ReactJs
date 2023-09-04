import { configureStore } from "@reduxjs/toolkit";
import isLoggedInSlice from "./isLoggedInSlice";

export const store = configureStore({
  reducer: {
    isLoggedIn: isLoggedInSlice,
  },
});
