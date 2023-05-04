import { configureStore } from "@reduxjs/toolkit";
import jsonReducer from "../slices/jsonSlice";

export const store = configureStore({
  reducer: {
    json: jsonReducer,
  },
});