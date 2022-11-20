import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import floorReducer from "./floorReducer";
import wardReducer from "./wardReducer";
import bedReducer from "./bedReducer";

export default combineReducers({
    signInReducer,
    floorReducer,
    wardReducer,
    bedReducer,
});