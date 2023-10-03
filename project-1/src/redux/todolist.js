import { createSlice } from "@reduxjs/toolkit";

const counterList = createSlice({
   name: "list",
   initialState: {
      value: [],
   },
   reducers: {
      addList: (state, action) => {
         state.value = [...action.payload];
      },
      onDone: (state, action) => {
         let newList = [...state.value];
         newList[action.payload].isDone = !newList[action.payload].isDone;
         state.value = newList;
      },
      onDelete: (state, action) => {
         let newList = [...state.value];
         newList.splice(action.payload, 1);
         state.value = newList;
      },
   },
});

export const { addList, onDone, onDelete } = counterList.actions;
export default counterList.reducer;
