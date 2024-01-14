import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

import routerSlice from "./slices/RouterSlice";
import bufferSlice from "./slices/BufferSlice";
import postSlice from "./slices/PostSlice";
const store = configureStore({
  reducer: {
    users: userSlice,
    routers: routerSlice,
    buffer: bufferSlice,
    posts: postSlice,
  },
});

export default store;
