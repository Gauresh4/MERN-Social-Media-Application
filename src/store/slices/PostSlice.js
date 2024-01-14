import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    createPostReducer(state, action) {
      console.log(action.payload);
      state.posts.push(action.payload);
    },
  },
});

export default postSlice.reducer;

export const { createPostReducer } = postSlice.actions;
