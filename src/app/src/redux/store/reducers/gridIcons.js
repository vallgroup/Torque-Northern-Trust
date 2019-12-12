import { SET_GRID_ICONS } from "../actions/gridIcons";

export function gridIconsReducer(gridIcons = {}, action) {
  if (action.type === SET_GRID_ICONS) return action.payload;

  return gridIcons;
}
