import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { contactReducer } from "./contactReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        // state name : reducer that will control it
        contactState: contactReducer,
        filterState: filterReducer,
        // ASYNC Example (LOGIN USER)
        userState: userReducer
        // ... add more states and reducers to include them in the store
    }
)