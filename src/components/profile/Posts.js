import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bufferReducer } from "../../store/slices/BufferSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const [postPopUp, setPostPopUp] = useState(false);

  const handlePopUp = (e) => {
    setPostPopUp((prev) => !prev);

    dispatch(bufferReducer(postPopUp));
  };
  return (
    <div className="bg-slate-400 m-2">
      <div className="p-1 border">
        <div
          className="flex items-center"
          onClick={() => dispatch(bufferReducer(true))}
        >
          <div className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg"
              alt="icons"
              className="md:w-10 md:h-10 h-9 w-9 rounded-full overflow-hidden"
            />
          </div>
          <div className="h-[30px] w-full">
            <input
              type="text"
              className="bg-slate-200 w-full outline-none h-full rounded-full text-[8px] md:text-[13px] pl-3"
              placeholder="Enter to search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
