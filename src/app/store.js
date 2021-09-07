import { configureStore } from "@reduxjs/toolkit";
import authReducer from 'features/Auth/authSlice'
import profileReducer from "features/Profile/profileSlice";
import appReducer from "./appSlice";

const rootReducer = {
    auth: authReducer,
    app: appReducer,
    profile: profileReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;