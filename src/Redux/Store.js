import { configureStore } from "@reduxjs/toolkit";
import authSlicesReducer from "./Slices/AuthSlice";
import courseSliceReducer from "./Slices/CourseSlice";

const store = configureStore({
  reducer: {
    auth: authSlicesReducer,
    course: courseSliceReducer,
  },
  devTools: true,
});

export default store;
