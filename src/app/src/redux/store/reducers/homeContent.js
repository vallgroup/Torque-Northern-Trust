import { SET_HOME_CONTENT } from "../actions";

export function homeContentReducer(homeContent = {}, action) {
  if (action.type === SET_HOME_CONTENT) return action.payload;

  return homeContent;
}
