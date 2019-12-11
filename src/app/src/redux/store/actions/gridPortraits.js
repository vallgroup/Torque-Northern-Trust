export const SET_GRID_PORTRAITS = "SET_GRID_PORTRAITS";
export const UPDATE_ALBUMS = "UPDATE_ALBUMS";

export function setGridPortraits({ payload = {} }) {
  return {
    type: SET_GRID_PORTRAITS,
    payload,
    meta: {
      action: "GET the grid portraits"
    }
  };
}
