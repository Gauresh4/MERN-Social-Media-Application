import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    loginReducer(state, action) {
      state.user = action.payload;
    },
    logoutReducer(state, action) {
      state.user = {};
    },
  },
});

export default userSlice.reducer;

export const { addUser, loginReducer, logoutReducer } = userSlice.actions;
