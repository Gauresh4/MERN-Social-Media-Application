import React, { useState } from "react";
import axios from "axios";
import { ImCancelCircle } from "react-icons/im";
import { bufferReducer } from "../../store/slices/BufferSlice";
import { useDispatch, useSelector } from "react-redux";
import { imageToBase64 } from "../../utility/imageToBase64";
import { toast } from "react-hot-toast";
import { FaCamera } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { createPostReducer } from "../../store/slices/PostSlice";
import { Link, useNavigate } from "react-router-dom";

const Saved = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userReducerData = useSelector((state) => state.users.user);
  const [selectedImage, setSelectedImage] = useState({
    file: "",
    name: "",
  });
  const [postData, setPostData] = useState({
    content: "",
    images: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setPostData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const uploadPostImage = await imageToBase64(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      setSelectedImage({
        file: file,
        name: file.name,
        size: file.size,
        type: file.type,
      });
    }

    setPostData((prev) => {
      return {
        ...prev,
        images: uploadPostImage,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = userReducerData.access_token;
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_SERVER_DOMAIN}/posts/`,
        postData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token, // Include your actual token value
          },
        }
      );

      //   console.log(data.data.msg)
      //   console.log("hi")

      if (data.data.msg === "Created Post!") {
        dispatch(createPostReducer(data.data));
        toast.success(data.data.msg);

        setPostData({
          content: "",
          images: "",
        });
        setSelectedImage({
          file: "",
          name: "",
        });
      } else toast.error(data.data.msg);
    } catch (error) {
      console.log(error.response);
      if (error.response.data.msg === "Invalid Authentication!") {
        navigate("/");
      }
    }
  };

  return (
    <div className="w-[350px] h-[290px] bg-white">
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <h3 className="font-bold md:text-[16px] text-slate-500 text-left capitalize text-md">
            Create Post
          </h3>
          <div
            className="md:text-[17px] text-xl text-slate-700 hover:text-red-500  cursor-pointer"
            onClick={() => dispatch(bufferReducer(false))}
          >
            <ImCancelCircle />
          </div>
        </div>
        <hr className="border-t-1 -mt-1 mb-1 border-slate-500" />
        <span className="text-sm text-slate-500">
          Hi Tanya , Whats in your mind !
        </span>
        <label htmlFor="content" name="" />
        <div className="ml-auto mr-auto">
          <textarea
            name="content"
            id=""
            cols=""
            rows="4"
            className="bg-slate-200 p-2 w-full  outline-none resize-none"
            onChange={handleOnChange}
            value={postData.content}
          />
        </div>

        <div className="flex justify-center  gap-2">
          <div className="md:text-[17px] text-xl text-slate-700 hover:text-green-500  cursor-pointer">
            <FaCamera />
          </div>
          <label htmlFor="image" className="mb-1 cursor-pointer">
            <div className="md:text-[17px] text-xl text-slate-700 hover:text-green-500  cursor-pointer">
              <input
                type="file"
                onChange={uploadImage}
                accept="image/"
                className="hidden"
                id="image"
              />
              <FaImage />
            </div>
          </label>
        </div>
        {selectedImage.name.length > 0 ? (
          <p className="text-center">
            {selectedImage.name.length > 8
              ? selectedImage.name.slice(0, 8)
              : selectedImage.name + selectedImage.name.slice(-4)}{" "}
          </p>
        ) : (
          <p className="text-center">File name</p>
        )}

        <button
          type="submit"
          className="   w-full  bg-slate-600 hover:bg-slate-700 cursor-pointer text-white  font-medium text-center mt-2"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Saved;
