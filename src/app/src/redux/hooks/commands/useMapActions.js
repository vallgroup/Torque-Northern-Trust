import { useDispatch } from "react-redux";
import { setMapContent, apiRequest } from "../../store/actions";

export function useTorqueMapActions() {
  const dispatch = useDispatch();
  const nameSpace = "/torque-map/v1";

  const fetchMapContent = () => {
    dispatch(
      apiRequest({
        method: "GET",
        url: `${nameSpace}/map/40`,
        onSuccess: onFetchMapContentSuccess,
        onError: onFetchMapContentError
      })
    );
  };

  const onFetchMapContentSuccess = mapContent => {
    dispatch(setMapContent({ payload: mapContent }));
  };

  const onFetchMapContentError = error => {
    console.log(error);
  };

  return { fetchMapContent };
}
