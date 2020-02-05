import { useSelector } from "react-redux";

export function useMapContent() {
  return useSelector(state => state.mapContent);
}
