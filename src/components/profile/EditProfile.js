import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const EditProfile = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen mt-2">
        <div className="flex items-center">
          <div className="w-50 h-50 ml-1 mb-2 mr-1 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://via.placeholder.com/150"
              alt="Circle Image"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="text-left ">
              <p className="text-gray-700 text-base">Gauresh</p>
              <div className="flex items-center justify-between w-full">
                <p className="text-gray-700 text-xs">2 Followers</p>
                <p className="text-gray-700 text-xs">2 Following</p>
              </div>
              <div className="flex items-center">
                <FaLocationDot />
                <p className="text-xs">h2 hiu a</p>
              </div>
            </div>
            <div className="bg-blue-400 w-64 rounded-lg">
              <div className="cursor-pointer">
                <p className="text-xl  text-center">Edit Profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-grey p-4">
        <div className="flex items-center justify-center">
          <div className="flex space-x-4">
            <button
              id="postBtn"
              className="text-black focus:outline-none hover:bg-blue-600 px-4 py-2 rounded transition"
            >
              Post
            </button>
            <button
              id="saveBtn"
              className="text-black focus:outline-none hover:bg-blue-600 px-4 py-2 rounded transition"
            >
              Save
            </button>
          </div>
        </div>
      </nav>
      <div>
        <img
          className="w-40 h-40 object-cover ml-2 mt-2"
          src="https://picsum.photos/800/400?image=1080"
          alt="post image"
        ></img>
      </div>
    </div>
  );
};

export default EditProfile;
