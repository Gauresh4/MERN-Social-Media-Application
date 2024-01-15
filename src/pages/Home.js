import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../components/profile/Posts";
import Saved from "../components/profile/Saved";
import Followers from "../components/profile/Followers";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

import Signup from "./Register";
const Home = () => {
  const [popUp, setPopUp] = useState(false);
  const isPostPopUp = useSelector((state) => state.buffer.buff.isPostPopUp);

  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-white w-[700px] mt-2">
          <Posts />
          <div className="flex items-center">
            <div className="w-10 h-10 ml-1 mb-2 mr-1 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://via.placeholder.com/150"
                alt="Circle Image"
              />
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="text-left">
                <p className="text-gray-700 text-base">Gauresh</p>
                <p className="text-gray-700 text-xs">a few seconds ago</p>
              </div>

              <div className="text-slate-600 mr-2">
                <div className="cursor-pointer">
                  <BsThreeDots />
                </div>
              </div>
            </div>
          </div>

          <div className="text-left ml-1">
            <p className="text-gray-700 text-base">Innovative Ideas</p>
          </div>
          <div>
            <img
              className="w-full h-56 object-cover"
              src="https://picsum.photos/800/400?image=1080"
              alt="post image"
            ></img>
          </div>

          <div className="flex items-center gap-1 md:gap-1 ">
            <div className="mt-2 ml-2 mb-2">
              <FaRegHeart />
            </div>
            <div className="mt-2 ml-2 mb-2">
              <FaRegComment />
            </div>
            <div className="flex justify-between w-full">
              <div className="mt-2 ml-2 mb-2">
                <PiPaperPlaneRightFill />
              </div>
              <div className="m-2">
                <FaRegBookmark />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-left ml-1 mr-1">
              <p className="text-gray-700 text-base">0 Likes</p>
            </div>
            <div className="text-left ml-1 mr-1">
              <p className="text-gray-700 text-base">0 Comments</p>
            </div>
          </div>
        </div>
        {/* <div className="bg-blue-300 w-[400px]">
          <div>Profile</div>
          <div>Follower</div>
        </div> */}
        <div className="bg-white w-[400px] mt-2 ml-2">
          <div className="p-2">
            <div className="flex items-center">
              <div className="text-3xl cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg"
                  alt=""
                  className="md:w-[50px] md:h-12 h-7 w-7 rounded-full overflow-hidden"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="">
                  <p className="m-0 text-[11px] font-semibold">Username</p>
                  <p className="m-0 text-[11px] font-semibold">Full name</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mx-2 mt-2">
              <p className="text-[13px] font-semibold text-blue-700 ">
                Recommendations
              </p>
              <div className="md:text-[17px] text-xl text-slate-700 hover:text-green-500  cursor-pointer">
                <IoMdRefresh />
              </div>
            </div>
            <Followers />
            <Followers />
            <Followers />
            <Followers />
            <Followers />
            <Followers />
          </div>
        </div>
      </div>

      <div className={` ${isPostPopUp ? "visible" : "collapse"}`}>
        <div className=" fixed z-10 left-[400px] top-[200px]">
          <Saved />
        </div>
      </div>
    </div>
  );
};

export default Home;
