import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  courseData: [],
};

export const getAllCourses = createAsyncThunk("/course/get", async () => {
  try {
    const response = axiosInstance("/course");
    toast.promise(response, {
      loading: "Loading course data...",
      success: "Courses loaded successfully",
      error: "Failed to get the course",
    });
    return (await response).data.course;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const courseSlice = createSlice({
  name: "Course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default courseSlice;
