export const SET_MENU_ITEMS = "SET_MENU_ITEMS";

export function setMenuItems({ payload = {} }) {
  return {
    type: SET_MENU_ITEMS,
    payload,
    meta: {
      action: "GET the menu items"
    }
  };
}
