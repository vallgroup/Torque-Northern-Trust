import { useDispatch } from "react-redux";
import {
  setGridPortraits,
  setGridIcons,
  apiRequest
} from "../../store/actions";

export function useNortherTrustActions() {
  const dispatch = useDispatch();
  const nameSpace = "/northern-trust/v1";

  const fetchGridPortraits = () => {
    dispatch(
      apiRequest({
        method: "GET",
        url: `${nameSpace}/portrait-grid/test-grid`,
        onSuccess: onFetchGridPortraitsSuccess,
        onError: fetchGridPortraitsError
      })
    );
  };

  const fetchGridIcons = () => {
    dispatch(
      apiRequest({
        method: "GET",
        url: `${nameSpace}/icon-grid/test-grid`,
        onSuccess: onFetchGridIconsSuccess,
        onError: fetchGridIconsError
      })
    );
  };

  const onFetchGridPortraitsSuccess = gridPortraits => {
    dispatch(setGridPortraits({ payload: gridPortraits }));
  };

  const fetchGridPortraitsError = error => {
    console.log(error);
  };

  const onFetchGridIconsSuccess = gridIcons => {
    dispatch(setGridIcons({ payload: gridIcons }));
  };

  const fetchGridIconsError = error => {
    console.log(error);
  };

  return { fetchGridPortraits, fetchGridIcons };
}
