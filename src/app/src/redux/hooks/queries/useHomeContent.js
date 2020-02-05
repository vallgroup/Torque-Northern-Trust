import { useSelector } from "react-redux";

export function useHomeContent() {
  return useSelector(state => state.homeContent);
}
