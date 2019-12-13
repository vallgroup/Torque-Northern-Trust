import { useDispatch } from "react-redux";
import {
  setGridPortraits,
  setGridIcons,
  apiRequest,
  setMenuItems,
  setEvents
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

  const onFetchGridPortraitsSuccess = gridPortraits => {
    dispatch(setGridPortraits({ payload: gridPortraits }));
  };

  const fetchGridPortraitsError = error => {
    console.log(error);
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

  const onFetchGridIconsSuccess = gridIcons => {
    dispatch(setGridIcons({ payload: gridIcons }));
  };

  const fetchGridIconsError = error => {
    console.log(error);
  };

  const fetchMenuItems = () => {
    dispatch(
      apiRequest({
        method: "GET",
        url: `${nameSpace}/nav/menu-1`,
        onSuccess: onFetchMenuItemsSuccess,
        onError: fetchMenuItemsError
      })
    );
  };

  const onFetchMenuItemsSuccess = menuItems => {
    dispatch(setMenuItems({ payload: menuItems }));
  };

  const fetchMenuItemsError = error => {
    console.log(error);
  };

  const fetchEvents = () => {
    dispatch(
      apiRequest({
        method: "GET",
        url: `${nameSpace}/event/test`,
        onSuccess: onFetchEventsSuccess,
        onError: fetchEventsError
      })
    );
  };

  const onFetchEventsSuccess = events => {
    dispatch(setEvents({ payload: events }));
  };

  const fetchEventsError = error => {
    console.log(error);
  };

  return { fetchGridPortraits, fetchGridIcons, fetchMenuItems, fetchEvents };
}
