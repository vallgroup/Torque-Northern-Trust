import { SET_EVENTS } from "../actions";

export function eventsReducer(events = {}, action) {
  if (action.type === SET_EVENTS) return action.payload;

  return events;
}
