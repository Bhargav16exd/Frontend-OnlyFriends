import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import authSlice from "./slices/authSlice";
import letterSlice from "./slices/letterSlice";

const store = configureStore({
    reducer: {
      user: userSlice,
      auth:authSlice,
      letter:letterSlice
    },
    devTools: true,
  });
  
  export default store;