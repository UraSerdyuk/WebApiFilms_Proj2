import { SET_INPUT_VALUE } from "../constants/constants";

const initialState = "";

export function inputReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return action.payload;
    default:
      return state;
  }
}
