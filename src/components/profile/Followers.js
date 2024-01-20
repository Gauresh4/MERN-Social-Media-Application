import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { followUnfollowReducer } from "../../store/slices/UserSlice";

const Followers = ({ username, fullname, avatar, status, id, token }) => {
  console.log(username);
  const dispatch = useDispatch();
  const userStatus = status === "Follow" ? "follow" : "unfollow";
  console.log(token);
  const userReducerData = useSelector(
    (state) => state.users.followUnfollow.data.updatedUser
  );
  console.log(userReducerData);
  const handleFollowUnfollow = async () => {
    try {
      const fetchData = await axios.patch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/user/${id}/${userStatus}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token, // Include your actual token value
          },
        }
      );

      dispatch(followUnfollowReducer(fetchData));
      console.log(fetchData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
