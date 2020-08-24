import { SET_ARRAY_ACTION } from "../types";

export default function (array) {
  return {
    type: SET_ARRAY_ACTION,
    payload: array,
  };
}
