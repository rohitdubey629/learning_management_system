import { Route, Routes } from "react-router-dom";
import Denied from "../src/pages/Denied";
import "./App.css";
import RequireAuth from "./components/auth/RequireAuth";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/Signup";
import CourseDescription from "./pages/course/CourseDescription";
import CourseList from "./pages/course/CourseList";
import CreateCourse from "./pages/course/CreateCourse";
import EditProfile from "./pages/user/EditProfile";
import Profile from "./pages/user/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/courses" element={<CourseList />}></Route>
        <Route
          path="/course/description"
          element={<CourseDescription />}
        ></Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path="/user/profile" element={<Profile />} />
          <Route path="user/editProfile" element={<EditProfile />} />
        </Route>

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/denied" element={<Denied />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
