import { createSlice } from "@reduxjs/toolkit";

const initialState = {
           userData: []
};

export const profileSlice = createSlice({
           name: "profile",
           initialState,
           reducers: {
                      getProfileInfo: (userID, action) => {
                                 console.log(action.payload);
                      }
           }
})
export const { getProfileInfo } = profileSlice.actions;
export default profileSlice.reducer;