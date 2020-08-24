import { SET_NUMBER_ACTION } from "../types";

export default function (number) {
  return {
    type: SET_NUMBER_ACTION,
    payload: number,
  };
}
