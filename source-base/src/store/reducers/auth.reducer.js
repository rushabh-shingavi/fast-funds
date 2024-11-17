import {
  SET_LOGIN_DETAILS,
  SET_STEP_COUNT,
} from "../constants";

const initialState = {
  stepCount: 0,
  loginDetails:[],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_STEP_COUNT:
      return { ...state, stepCount: payload };
      case SET_LOGIN_DETAILS:
      return { ...state, loginDetails: payload };
    default:
      return state;
  }
};
