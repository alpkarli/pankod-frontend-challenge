import { combineReducers } from "redux";
import { FilterReducer } from "./filter";

export default combineReducers({
    filter: FilterReducer,
});