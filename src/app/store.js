import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/Auth/authSlice";
import friendReducer from "features/Friend/friendSlice";
import profileReducer from "features/Profile/profileSlice";
import appReducer from "./appSlice";

const rootReducer = {
  auth: authReducer,
  app: appReducer,
  profile: profileReducer,
  users: friendReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
