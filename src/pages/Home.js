import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../components/profile/Posts";
import Saved from "../components/profile/Saved";
import Signup from "./Register";
const Home = () => {
  const [popUp, setPopUp] = useState(false);
  const isPostPopUp = useSelector((state) => state.buffer.buff.isPostPopUp);

  // useEffect(() => {
  //   // This effect runs when someVariable changes
  //   console.log("kooo")

  // }, [isPostPopUp]);
  return (
    <div>
      <div className="flex justify-center">
        <div className="bg-blue-500 w-[700px]">
          <Posts />
          <h1>hihi</h1>
          <h1>hihi</h1>
          <h1>hihi</h1>
          <h1>hihi</h1>
          <h1>hihi</h1>
          <h1>hihi</h1>
          <h1>hihi</h1>
          <h1>hihi</h1>
          <h1>hihi</h1>
          <h1>hihi</h1>
          <h1>hihi</h1>
          <h1>hihi</h1>
        </div>
        <div className="bg-blue-300 w-[400px]">
          <div>Profile</div>
          <div>Follower</div>
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
