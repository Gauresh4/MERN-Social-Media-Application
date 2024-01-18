import React from "react";

const Followers = ({ username, fullname, avatar, status }) => {
  console.log(username);
  return (
    <div className="flex items-center my-2">
      <div className="text-3xl cursor-pointer">
        <img
          src={avatar}
          alt=""
          className="md:w-[50px] md:h-12 h-7 w-7 rounded-full overflow-hidden"
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="">
          <p className="m-0 text-[11px] text-black font-semibold">{username}</p>
          <p className="m-0 text-[11px] text-slate-600 font-semibold">
            {fullname}
          </p>
        </div>
        <div className="w-[60px]">
          <button className="text-[12px] font-semibold border-1 text-center border-blue-600 text-blue-700 hover:border-white hover:bg-blue-700 hover:text-white py-[4px] w-full rounded-sm">
            {status}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Followers;
