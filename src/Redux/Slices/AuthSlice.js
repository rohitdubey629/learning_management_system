import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

const authSlices = createSlice({
  name: "auth",
  initialState,
  reducer: {},
});

export default authSlices.reducer;
