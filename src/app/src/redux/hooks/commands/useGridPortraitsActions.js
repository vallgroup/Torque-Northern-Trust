import { useDispatch } from "react-redux";
import { API_REQUEST, apiRequest } from "../../store/actions/api";
import { setGridPortraits } from "../../store/actions/gridPortraits";

export function useGridPortraitsActions() {
  const dispatch = useDispatch();

  const fetchGridPortraits = () => {
    dispatch(
      apiRequest({
        method: "GET",
        url: "/portrait-grid/test-grid",
        onSuccess: onFetchGridPortraitsSuccess,
        onError: fetchGridPortraitsError
      })
    );
  };

  const onFetchGridPortraitsSuccess = gridPortraits => {
    dispatch(setGridPortraits({ payload: gridPortraits }));
  };

  const fetchGridPortraitsError = error => {
    console.log(error);
  };

  return { fetchGridPortraits };
}
