import { combineReducers } from "redux";
import authSlice from "./Slice/authSlice";
import groupSlice from "./Slice/groupSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  group: groupSlice,
});

export default rootReducer;