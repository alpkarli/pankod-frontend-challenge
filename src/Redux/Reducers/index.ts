import { combineReducers } from "redux";
import { EntriesReducer } from './entries';
import { FilterReducer } from "./filter";

export default combineReducers({
    filter: FilterReducer,
    entries: EntriesReducer
});