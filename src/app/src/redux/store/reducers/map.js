import { SET_MAP_CONTENT } from "../actions";

export function mapReducer(mapContent = {}, action) {
  if (action.type === SET_MAP_CONTENT) return action.payload;

  return mapContent;
}
