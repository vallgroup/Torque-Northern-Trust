export const SET_EVENTS = "SET_EVENTS";

export function setEvents({ payload = {} }) {
  return {
    type: SET_EVENTS,
    payload,
    meta: {
      action: "GET the events"
    }
  };
}
