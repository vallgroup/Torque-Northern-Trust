export const SET_GRID_PORTRAITS = "SET_GRID_PORTRAITS";

export function setGridPortraits({ payload = {} }) {
  return {
    type: SET_GRID_PORTRAITS,
    payload,
    meta: {
      action: "GET the grid portraits"
    }
  };
}
