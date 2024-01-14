import React, { useState } from "react";
import axios from "axios";
import { ImCancelCircle } from "react-icons/im";
import { bufferReducer } from "../../store/slices/BufferSlice";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-hot-toast";
import { FaCamera } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { createPostReducer } from "../../store/slices/PostSlice";

const Saved = () => {
  const dispatch = useDispatch();
  const userReducerData = useSelector((state) => state.users.user);
  const [postData, setPostData] = useState({
    content: "",
    images:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fcartoon-avatar&psig=AOvVaw2lJZ6EBVAStEWfd7oGvA0p&ust=1705260852966000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCNieiu2N24MDFQAAAAAdAAAAABAJ",
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

  // const uploadImage=async(e)=>{
  //     const uploadProductImage= await imageToBase64(e.target.files[0]);
  //     console.log(uploadProductImage)
  //     setProductData((prev)=>{
  //       return {
  //         ...prev,
  //         productImage:uploadProductImage
  //       }
  //     })
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = userReducerData.access_token;

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

    console.log(data);

    if (data.data.msg === "Created Post!") {
      dispatch(createPostReducer(data.data));
      toast.success(data.data.msg);
    } else toast.error(data.data.msg);
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

        <div className="flex justify-center mt-5 gap-2">
          <div className="md:text-[17px] text-xl text-slate-700 hover:text-red-500  cursor-pointer">
            <FaCamera />
          </div>
          <div className="md:text-[17px] text-xl text-slate-700 hover:text-red-500  cursor-pointer">
            <FaImage />
          </div>
        </div>

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
