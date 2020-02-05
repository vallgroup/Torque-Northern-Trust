import { useSelector } from "react-redux";

export function useCurrentEvent() {
  return useSelector(state => state.currentEvent);
}
