import { createSlice } from "@reduxjs/toolkit";

export const registSlice = createSlice({
   name: "regist",
   initialState: {
      value: [],
   },
   reducers: {
      setData: (state, action) => {
         state.value = action.payload;
      },
   },
});

export const { setData } = registSlice.actions;
export default registSlice.reducer;
