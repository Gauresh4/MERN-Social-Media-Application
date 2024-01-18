import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { imageToBase64 } from "../../utility/imageToBase64";
const EditProfile = () => {
  const navigate = useNavigate();
  const handleProfile = async () => {
    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };
  const handleEditProfile = async () => {
    setTimeout(() => {
      navigate("/editprofile");
    }, 1000);
  };
  const [showEditProfileBio, setShowEditProfileBio] = useState(false);
  const handleshowEditProfileBio = () => {
    setShowEditProfileBio((prev) => !prev);
  };

  const [data, setData] = useState({
    fullname: "",
    mobile: "",
    address: "",
    website: "",
    bio: "",
    gender: "",
  });

  const handleChangeProfileImage = async (e) => {
    const data = await imageToBase64(e.target.files[0]);
    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

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
                <p
                  className="text-xl  text-center whitespace-nowrap  mt-1 mb-0 cursor-pointer hover:font-medium"
                  onClick={handleshowEditProfileBio}
                >
                  Edit Profile
                </p>
                {showEditProfileBio && (
                  <div className="absolute right-5 shadow drop-shadow-md">
                    <div className="p-3 md:p-4">
                      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
                        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
                          <img
                            src={
                              data.image
                                ? data.image
                                : "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg"
                            }
                            className="w-full h-full"
                          />

                          <label htmlFor="profileImage">
                            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
                              <p className="text-sm text-white p-0.5">Upload</p>
                            </div>
                            <input
                              type={"file"}
                              id="profileImage"
                              className="hidden"
                              accept="image/*"
                              onChange={handleChangeProfileImage}
                            />
                          </label>
                        </div>
                        <form
                          className="w-full py-3 flex flex-col"
                          // onSubmit={handleSubmit}
                        >
                          <label htmlFor="fullName">Full Name </label>
                          <div className="flex items-center justify-between">
                            <input
                              for="textInput"
                              type={"text"}
                              id="fullName"
                              name="fullName"
                              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                            />
                          </div>
                          <label htmlFor="mobile">Mobile </label>
                          <input
                            for="textInput"
                            type={"text"}
                            id="mobile"
                            name="mobile"
                            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                          />
                          <label htmlFor="address">Address </label>
                          <input
                            for="textInput"
                            type={"text"}
                            id="address"
                            name="address"
                            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                          />
                          <label htmlFor="website">Website </label>
                          <input
                            for="textInput"
                            type={"text"}
                            id="website"
                            name="website"
                            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                          />
                          <label htmlFor="bio">Bio </label>
                          <input
                            for="textInput"
                            type={"text"}
                            id="bio"
                            name="bio"
                            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                          />
                          <label htmlFor="gender">Gender</label>
                          <div className="mt-2 flex">
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                value="male"
                                // checked={selectedGender === "male"}
                                // onChange={() => handleGenderChange("male")}
                                className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-500"
                              />
                              <span className="ml-2">Male</span>
                            </label>

                            <label className="inline-flex items-center ml-6">
                              <input
                                type="radio"
                                value="female"
                                // checked={selectedGender === "female"}
                                // onChange={() => handleGenderChange("female")}
                                className="form-radio text-pink-500 focus:ring-2 focus:ring-pink-500"
                              />
                              <span className="ml-2">Female</span>
                            </label>

                            <label className="inline-flex items-center ml-6">
                              <input
                                type="radio"
                                value="other"
                                // checked={selectedGender === "other"}
                                // onChange={() => handleGenderChange("other")}
                                className="form-radio text-purple-500 focus:ring-2 focus:ring-purple-500"
                              />
                              <span className="ml-2">Other</span>
                            </label>
                          </div>
                          <button className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white text-s rounded-full">
                            Save
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* w-full  m-auto bg-blue-500 hover:bg-red-600 cursor-pointer text-white text-s font-medium py-1 rounded-full mt-4 */}
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
