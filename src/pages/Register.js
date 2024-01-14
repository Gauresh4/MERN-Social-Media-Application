import React, { useState } from "react";

import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { isLogInReducer } from "../store/slices/RouterSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirrmPassword] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [userData, setUserData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    gender: "",
    avatar: "",
    mobile: "",
    address: "",
    story: "",
    website: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirrmPassword((prev) => !prev);
  };

  const handleSignUp = () => {
    dispatch(isLogInReducer());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = userData;
    console.log(password + confirmPassword);
    if (password !== confirmPassword)
      return toast.error("Password and confirm password does not match.");

    const fetchData = await fetch(
      "http://localhost:8001/api/v1/user/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await fetchData.json();
    if (data.msg) alert(data.msg);
    console.log(data);
    if (data.msg === "Register Success!") {
      toast.success("Your account has been created successfully");
      dispatch(isLogInReducer());
      navigate("/login");
    } else toast.error(data.message);
  };

  return (
    <div className="p-3 md:p-4  ">
      <div className="w-full max-w-sm bg-white mx-auto flex-col p-4 ">
        {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}

        <form className="w-full py-3 flex flex-col " onSubmit={handleSubmit}>
          {/* <form className="w-full py-3 flex flex-col"> */}
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="mt-1 mb-2 w-full bg-white px-2 py-1 rounded border focus-within:outline-blue-300"
            value={userData.fullname}
            onChange={handleOnChange}
          />

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 mb-2 w-full bg-white px-2 py-1 rounded border focus-within:outline-blue-300"
            value={userData.username}
            onChange={handleOnChange}
          />

          <label htmlFor="email">E-mail</label>
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
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-white border  rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300 ">
            <input
              type={!showConfirmPassword ? "password" : "text"}
              id="confimPassword"
              name="confirmPassword"
              className=" w-full bg-white outline-0 border-none "
              value={userData.confirmPassword}
              onChange={handleOnChange}
            />

            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <div>
            <div className="flex justify-between">
              <label>
                <input
                  className="mr-2"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={userData.gender === "Male"}
                  onChange={handleOnChange}
                />
                Male
              </label>

              <label>
                <input
                  className="mr-2"
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={userData.gender === "Female"}
                  onChange={handleOnChange}
                />
                Female
              </label>

              <label>
                <input
                  className="mr-2"
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={userData.gender === "Other"}
                  onChange={handleOnChange}
                />
                Other
              </label>
            </div>
          </div>

          {/* <label htmlFor="role">Role</label>
          <input
            type="role"
            id="role"
            name="role"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={userData.role}
            onChange={handleOnChange}
          />

          
<label htmlFor="gender">Gender</label>
          <input
            type="gender"
            id="gender"
            name="gender"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={userData.gender}
            onChange={handleOnChange}
          />

          
<label htmlFor="avatar">Avatar</label>
          <input
            type="avatar"
            id="avatar"
            name="avatar"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={userData.avatar}
            onChange={handleOnChange}
          />

          
<label htmlFor="mobile">Mobile</label>
          <input
            type="mobile"
            id="mobile"
            name="mobile"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={userData.mobile}
            onChange={handleOnChange}
          />

          
<label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            name="address"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={userData.address}
            onChange={handleOnChange}
          />

          
<label htmlFor="story">Story</label>
          <input
            type="story"
            id="story"
            name="story"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={userData.story}
            onChange={handleOnChange}
          />

          
<label htmlFor="website">Website</label>
          <input
            type="website"
            id="website"
            name="website"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={userData.website}
            onChange={handleOnChange}
          />
        */}

          <button
            type="submit"
            className="   w-full m-auto bg-slate-600 hover:bg-slate-700 cursor-pointer text-white  font-medium text-center py-1  mt-4"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm justify mt-2 ">
          Already have an account ?{" "}
          <Link
            to="/login"
            onClick={handleSignUp}
            className="text-red-500  font-bold no-underline"
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
