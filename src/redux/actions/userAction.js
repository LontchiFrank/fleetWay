import { GET_USER } from "../reducers/ActionType";

export const getUser = (info) => {
  return {
    type: GET_USER,
    payload: info,
  };
};
