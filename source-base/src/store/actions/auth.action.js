import { SET_LOGIN_DETAILS, SET_STEP_COUNT} from "../constants";

export const setStepCount = (payload) => ({
  type: SET_STEP_COUNT,
  payload,
});
export const setLoginDetails = (payload) => ({
  type: SET_LOGIN_DETAILS,
  payload,
});