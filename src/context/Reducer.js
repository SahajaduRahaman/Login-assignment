import { getCurrentUser } from "../utils";
import { SET_USER } from "./actionTypes";

export const initialState = {
  user: getCurrentUser() || null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
