import { createSlice } from "@reduxjs/toolkit";

const routerSlice = createSlice({
  name: "router",
  initialState: {
    allRouters: {
      isSignup: false,
    },
  },
  reducers: {
    isSignupReducer(state, action) {
      // state.push(action.payload)
      state.allRouters.isSignup = true;
    },
    isLogInReducer(state, action) {
      state.allRouters.isSignup = false;
    },
  },
});

export default routerSlice.reducer;

export const { isSignupReducer, isLogInReducer } = routerSlice.actions;
