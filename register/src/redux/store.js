import { configureStore } from "@reduxjs/toolkit";
import registSlice from "./registSlice";

export default configureStore({
   reducer: {
      regist: registSlice,
   },
});
