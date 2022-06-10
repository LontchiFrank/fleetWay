import { GET_DRIVERS } from "../reducers/ActionType";
import firebase from "firebase";

// export const getUser = (info) => {
//   return {
//     type: GET_USER,
//     payload: info,
//   };
// };
export const getDrivers = (items) => {
  return {
    type: GET_DRIVERS,
    payload: items,
  };
};
