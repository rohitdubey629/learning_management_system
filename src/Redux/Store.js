import { configureStore } from "@reduxjs/toolkit";
import authSlicesReducer from "./Slices/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authSlicesReducer,
  },
  devTools: true,
});

export default store;
