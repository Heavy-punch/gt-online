import { configureStore } from "@reduxjs/toolkit";
import authReducer from 'features/Auth/authSlice'
import appReducer from "./appSlice";

const rootReducer = {
    auth: authReducer,
    app: appReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;