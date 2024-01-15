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
    </div>
  );
};

export default EditProfile;
