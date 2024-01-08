import { createSlice } from "@reduxjs/toolkit";
import logger from "../../utils/logger";

export const profileUserSlice = createSlice({
  name: "profileData",
  initialState: {
    userProfileData: {},
  },
  reducers: {
    profileDataAction: (state, action) => {
        return (state = {
          ...state,
          profileData: { ...action.payload },
        });
      },
  },
});

export const { profileDataAction } = profileUserSlice.actions;

export const profileData = (data) => async (dispatch) => {
  try {
    dispatch(profileDataAction(data));
  } catch (error) {
    logger(error);
  }
};

export const selectProfileUserData = (state) => state.profileData.profileData;

export default profileUserSlice.reducer;
