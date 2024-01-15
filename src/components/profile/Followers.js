import React from "react";

const Followers = () => {
  return (
    <div className="flex items-center my-2">
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
        <div>
          <button className="text-[12px] font-semibold border-1 border-blue-600 text-blue-700 hover:border-white hover:bg-blue-700 hover:text-white px-[8px] py-[3px] rounded-sm">
            Following
          </button>
        </div>
      </div>
    </div>
  );
};

export default Followers;
