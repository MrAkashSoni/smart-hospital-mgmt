import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import floorReducer from "./floorReducer";
import wardReducer from "./wardReducer";
import bedReducer from "./bedReducer";
import loaderReducer from "./loaderReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
    signInReducer,
    floorReducer,
    wardReducer,
    bedReducer,
    loaderReducer,
    notificationReducer,
});