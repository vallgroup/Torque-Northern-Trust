export const SET_GRID_ICONS = "SET_GRID_ICONS";

export function setGridIcons({ payload = {} }) {
  return {
    type: SET_GRID_ICONS,
    payload,
    meta: {
      action: "GET the grid iconos"
    }
  };
}
