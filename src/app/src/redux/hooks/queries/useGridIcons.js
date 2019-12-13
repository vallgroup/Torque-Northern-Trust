import { useSelector } from "react-redux";

export function useGridIcons() {
  return useSelector(state => state.gridIcons);
}
