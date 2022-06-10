import { combineReducers } from "redux";
import driverReducer from "./driverReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
  driver: driverReducer,
});

export default reducers;
