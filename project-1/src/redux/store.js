import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import counterList from "./todolist";
export const store = configureStore({
   reducer: {
      counter: counterSlice,
      list: counterList,
   },
});
