import { SET_GRID_PORTRAITS } from "../actions/gridPortraits";

export function gridPortraitsReducer(gridPortraits = {}, action) {
  if (action.type === SET_GRID_PORTRAITS) return action.payload;

  return gridPortraits;
}
