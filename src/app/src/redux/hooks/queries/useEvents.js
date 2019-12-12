import { useSelector } from "react-redux";

export function useEvents() {
  return useSelector(state => state.events);
}
