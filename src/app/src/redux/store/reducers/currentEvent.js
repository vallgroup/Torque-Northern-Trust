import { SET_CURRENT_EVENT } from "../actions";

export function currentEventReducer(currentEvent = {}, action) {
  if (action.type === SET_CURRENT_EVENT) return action.payload;

  return currentEvent;
}
