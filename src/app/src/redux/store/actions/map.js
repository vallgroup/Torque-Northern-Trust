export const SET_MAP_CONTENT = "SET_MAP_CONTENT";

export function setMapContent({ payload = {} }) {
  return {
    type: SET_MAP_CONTENT,
    payload,
    meta: {
      action: "GET the map content"
    }
  };
}
