import React, { useEffect, useState } from "react";
import logo from "./../assets/merny_logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { loginReducer } from "../store/slices/UserSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userReducerData = useSelector((state) => state.users.user);
  const [shadowMenu, setShadowMenu] = useState(false);
  const handleShowMenu = () => {
    setShadowMenu((prev) => !prev);
  };

  const handleProfile = async () => {
    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  const handleLogout = async () => {
    const token = userReducerData.access_token;
    const fetchData = await axios.post(
      `http://localhost:8001/api/v1/user/logout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token, // Include your actual token value
        },
      }
    );

    if (fetchData.data.msg === "Logged out!") {
      dispatch(loginReducer(fetchData.data));
      toast.success(fetchData.data.msg);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else toast.error(fetchData.data.msg);
  };

  return (
    <header className="fixed bg-white shadow-md w-full h-10 md:h-16 px-2 md:px-4 z-50">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-10 md:h-14 text-white">
            <img src={logo} alt="" className="h-full" />
          </div>
        </Link>

        <div
          className="w-[170px] md:w-[400px] md:h-10 h-6 flex items-center bg-slate-200 rounded-full outline-2 outline-slate-300
        focus-within:outline"
        >
          <input
            type="text"
            className="bg-slate-200 w-full outline-none h-full rounded-full text-[10px] md:text-xl text-center"
            placeholder="Enter to search"
          />
          <span className="flex text-sm md:text-xl text-slate-400 md:pr-4 pr-2 cursor-pointer hover:text-slate-500">
            <FaSearch />
          </span>
        </div>
        <div className="flex items-center gap-4 md:gap-7">
          {/* <div className="hidden sm:block">
         
          </div> */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-3 md:gap-7">
              <div className="text-2xl   relative">
                <Link to="" className="text-slate-600">
                  <AiFillHome />
                </Link>
              </div>
              <div className="text-2xl   relative">
                <Link to="" className="text-slate-600">
                  <BiMessageSquareDetail />
                </Link>
              </div>
              <div className="text-2xl   relative">
                <Link to="" className="text-slate-600">
                  <IoNotificationsSharp />
                </Link>
                <div className="h-5 w-5 absolute  text-white -right-2 -top-2 text-[15px]  rounded-full font-bold flex items-center justify-center bg-red-500">
                  {0}
                </div>
              </div>
            </div>
          </div>

          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg"
                alt=""
                className="md:w-10 md:h-10 h-7 w-7 rounded-full overflow-hidden"
              />
            </div>
            {shadowMenu && (
              <div className=" absolute right-2 bg-white  px-3 shadow drop-shadow-md flex flex-col text-center min-w-[128px] ">
                <nav className="flex flex-col  md:hidden">
                  <Link
                    to={"/"}
                    className="hover:bg-slate-300 text-black no-underline"
                  >
                    Home
                  </Link>
                  <Link
                    to={"/about"}
                    className="hover:bg-slate-300 text-black no-underline"
                  >
                    Messages
                  </Link>
                  <Link
                    to={"/contact"}
                    className="hover:bg-slate-300 text-black no-underline"
                  >
                    Notifications
                  </Link>
                </nav>

                {!userReducerData.user ? (
                  <Link
                    to={"/login"}
                    className="hover:bg-slate-300 whitespace-nowrap cursor-pointer hover:font-medium"
                  >
                    Login
                  </Link>
                ) : (
                  <div className="">
                    <p
                      className="whitespace-nowrap  mt-1 mb-0 cursor-pointer hover:bg-slate-300  hover:font-medium"
                      onClick={handleProfile}
                    >
                      Profile
                    </p>
                    <p
                      className="whitespace-nowrap  mt-0 mb-1 cursor-pointer hover:bg-slate-300  hover:font-medium"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* this is trial */}
      {/* mobile */}
    </header>
  );
};
export default Header;
