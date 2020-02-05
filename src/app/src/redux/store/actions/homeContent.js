export const SET_HOME_CONTENT = "SET_HOME_CONTENT";

export function setHomeContent({ payload = {} }) {
  return {
    type: SET_HOME_CONTENT,
    payload,
    meta: {
      action: "GET the home content"
    }
  };
}
