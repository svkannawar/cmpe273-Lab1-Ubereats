import { configureStore } from "@reduxjs/toolkit";
//import { composeWithDevTools } from "redux-devtools-extension";
import LoginReducer from "./LoginReducer";
import SignupReducer from "./SignupReducer";
import DashBoardReducer from "./DashBoardReducer";
import DashBoardUseEffectReducer, { restaurantListUE } from "./DashBoardUseEffectReducer";

export default configureStore({
    reducer: {
        signin: LoginReducer,
        signup: SignupReducer,
        restaurantList: DashBoardReducer,
        restaurantListDashboardue: DashBoardUseEffectReducer
    },
});