import { GET_USER } from "./ActionType";

// const ref = firebase.firestore().collection("Users");

const initialState = {
  user: null,
  Loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        user: payload,
        Loading: false,
      };
    default:
      return state;
  }
}
