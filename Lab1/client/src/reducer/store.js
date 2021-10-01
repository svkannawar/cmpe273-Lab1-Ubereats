import { configureStore } from "@reduxjs/toolkit";
//import { composeWithDevTools } from "redux-devtools-extension";
import LoginReducer from "./LoginReducer";
import SignupReducer from "./SignupReducer";

export default configureStore({
    reducer: {
        signin: LoginReducer,
        signup: SignupReducer,
    },
});