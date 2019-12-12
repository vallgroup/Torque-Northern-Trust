import { useDispatch } from "react-redux";
import { API_REQUEST, apiRequest } from "../../store/actions/api";
import { setGridIcons } from "../../store/actions/gridIcons";

export function useGridIconsActions() {
  const dispatch = useDispatch();

  const fetchGridIcons = () => {
    dispatch(
      apiRequest({
        method: "GET",
        url: "/icon-grid/test-grid",
        onSuccess: onFetchGridIconsSuccess,
        onError: fetchGridIconsError
      })
    );
  };

  const onFetchGridIconsSuccess = gridIcons => {
    dispatch(setGridIcons({ payload: gridIcons }));
  };

  const fetchGridIconsError = error => {
    console.log(error);
  };

  return { fetchGridIcons };
}
