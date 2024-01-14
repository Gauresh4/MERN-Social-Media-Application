import { createSlice } from "@reduxjs/toolkit";

const bufferSlice = createSlice({
  name: "buffer",
  initialState: {
    buff: {},
  },
  reducers: {
    bufferReducer(state, action) {
      state.buff.isPostPopUp = action.payload;
      console.log(state.buff.isPostPopUp);
    },
  },
});

export default bufferSlice.reducer;

export const { bufferReducer } = bufferSlice.actions;
