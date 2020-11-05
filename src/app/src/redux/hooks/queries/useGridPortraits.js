import { useSelector } from "react-redux";

export function useGridPortraits() {
  return useSelector(state => state.gridPortraits);
}
