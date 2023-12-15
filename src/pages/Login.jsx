import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/Slices/AuthSlice";
import HomeLayout from "../layout/HomeLayout";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handelUserInput = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the detail");
      return;
    }

    // const formData = new FormData();
    // formData.append("fullName", signupData.fullName);
    // formData.append("email", signupData.email);
    // formData.append("password", signupData.password);
    // formData.append("avatar", signupData.avatar);

    //dispatch create account
    const response = await dispatch(login(loginData));
    if (response?.payload?.success) navigate("/");

    setLoginData({
      email: "",
      password: "",
    });
    setPreviewImage("");
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          noValidate
          onSubmit={onLogin}
          className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-bold">Login Page</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              className="bg-transparent px-2 py-1 border"
              onChange={handelUserInput}
              value={loginData.email}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter your password..."
              className="bg-transparent px-2 py-1 border"
              onChange={handelUserInput}
              value={loginData.password}
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-bold text-xl cursor-pinter"
          >
            Login
          </button>
          <p className="text-center">
            Donot have an account ?
            <Link to="/signup" className="link text-accent cursor-pointer">
              signup
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
};

export default Login;
