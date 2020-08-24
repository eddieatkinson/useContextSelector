import { SET_ARRAY_ACTION, SET_NUMBER_ACTION } from "../types";

const INITIAL_STATE = {
  number: 6,
  array: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ARRAY_ACTION:
      return { ...state, array: action.payload };
    case SET_NUMBER_ACTION:
      return { ...state, number: action.payload };
    default:
      return state;
  }
}
