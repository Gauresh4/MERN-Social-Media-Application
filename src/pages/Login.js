import React, { useState } from "react";
import axios from "axios";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from "../store/slices/UserSlice";
import { isSignupReducer } from "../store/slices/RouterSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = userData;
    if (!email || !password) return alert("Please enter required fields");

    const data = await axios.post(
      `${process.env.REACT_APP_SERVER_DOMAIN}/user/login`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": "your-token-value", // Include your actual token value
        },
      }
    );

    if (data.data.msg === "Login Success!") {
      dispatch(loginReducer(data.data));
      toast.success(data.data.msg);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else toast.error(data.data.msg);
  };
  const handleSignUp = () => {
    dispatch(isSignupReducer());
  };

  return (
    <div className="p-3 md:p-4  ">
      <div className="w-full max-w-sm bg-white mx-auto flex-col p-4 ">
        <span className="text-xl font-bold flex justify-center ">MERNY</span>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-white px-2 py-1 rounded border focus-within:outline-blue-300"
            value={userData.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-white border  rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300 ">
            <input
              type={!showPassword ? "password" : "text"}
              id="password"
              name="password"
              className=" w-full bg-white outline-0 border-none "
              value={userData.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-sm text-slate-500 cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <span>Hide</span> : <span>Show</span>}
            </span>
          </div>

          <button
            type="submit"
            className="   w-full m-auto bg-slate-600 hover:bg-slate-700 cursor-pointer text-white  font-medium text-center py-1  mt-4"
          >
            Login
          </button>
        </form>

        <p className="text-sm justify mt-2 ">
          Don't have an account ?{" "}
          <Link
            to="/register"
            onClick={handleSignUp}
            className="text-red-500  font-bold no-underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
