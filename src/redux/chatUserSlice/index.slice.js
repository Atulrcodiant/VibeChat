import { createSlice } from "@reduxjs/toolkit";
import logger from "../../utils/logger";

export const chatUserSlice = createSlice({
  name: "chat",
  initialState: {
    userData: [],
  },
  reducers: {
    sendMessageAction: (state, action) => {
      state.userData = [...state.userData, action.payload];
    },
  },
});

export const { sendMessageAction } = chatUserSlice.actions;

export const sendMessage = (data) => async (dispatch) => {
  try {
    dispatch(sendMessageAction(data));
  } catch (error) {
    logger(error);
  }
};

export const selectUserData = (state) => state.chat.userData;

export default chatUserSlice.reducer;
