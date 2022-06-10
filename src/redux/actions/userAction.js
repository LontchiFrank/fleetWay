import { GET_USER, GET_DRIVERS } from "../reducers/ActionType";
import firebase from "firebase";

export const getUser = (info) => {
  return {
    type: GET_USER,
    payload: info,
  };
};
// export const getDrivers = (items) => {
//   const ref = firebase.firestore().collection("Drivers");

//   ref.get().then((item) => {
//     items = item.docs.map((doc) => doc.data());
//     // setData(items);
//     console.log(items);
//   });
//   // };
//   return {
//     type: GET_DRIVERS,
//     payload: items,
//   };
// };
