import { useDispatch } from "react-redux";
import { setCurrentEvent } from "../../store/actions";

export function useCurrentEventActions() {
  const dispatch = useDispatch();

  const setCurrentEventAction = event => {
    dispatch(setCurrentEvent({ payload: event }));
    console.log("ashdbaisb");
  };
  return { setCurrentEventAction };
}
