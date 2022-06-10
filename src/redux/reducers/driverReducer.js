import { GET_DRIVERS } from "./ActionType";

// const ref = firebase.firestore().collection("Users");

const initialState = {
  driver: null,
  Loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // case GET_USER:
    //   return {
    //     user: payload,
    //     Loading: false,
    //   };
    case GET_DRIVERS:
      return {
        driver: payload,
        Loading: false,
      };
    default:
      return state;
  }
}
