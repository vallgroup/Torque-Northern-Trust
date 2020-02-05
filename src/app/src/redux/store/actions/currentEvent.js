export const SET_CURRENT_EVENT = "SET_CURRENT_EVENT";

export function setCurrentEvent({ payload = {} }) {
  return {
    type: SET_CURRENT_EVENT,
    payload,
    meta: {
      action: "set current event"
    }
  };
}
