import { useSelector } from "react-redux";

export function useMenuItems() {
  return useSelector(state => state.menuItems);
}
