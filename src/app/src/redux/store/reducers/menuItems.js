import { SET_MENU_ITEMS } from "../actions";

export function menuItemsReducer(menuItems = {}, action) {
  if (action.type === SET_MENU_ITEMS) return action.payload;

  return menuItems;
}
