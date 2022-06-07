import {} from "./ActionType";
import app from "../../Firebase";

const ref = firebase.firestore().collection("Users");

const initialState = {
  user: null,
  Loading: false,
};

//   export default function (state = initialState, action) {
//     const { type, payload } = action;
//     switch (type) {
//       case REGISTER_SUCCESS:
//       case LOGIN_SUCCESS:
//         localStorage.setItem("token", payload.token);
//         return {
//           ...state,
//           ...payload,
//           isAuthenticated: true,
//           Loading: false,
//         };
//     }
// }
