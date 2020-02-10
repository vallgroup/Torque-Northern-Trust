import { useDispatch } from "react-redux";
import {
  setGridPortraits,
  setGridIcons,
  apiRequest,
  setMenuItems,
  setEvents,
  setHomeContent,
  setMapContent
} from "../../store/actions";

export function useNortherTrustActions() {
  const dispatch = useDispatch();
  const nameSpace = "/northern-trust/v1";

  const mapNameSpace = "/torque-map/v1";

  const fetchGridPortraits = (slug) => {
    dispatch(
      apiRequest({
        method: "GET",
        url: `${nameSpace}/portrait-grid/${slug}`,
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

  const fetchHomeContent = () => {
    dispatch(
      apiRequest({
        method: "GET",
        url: `${nameSpace}/resting-state`,
        onSuccess: onFetchHomeContentSuccess,
        onError: fetchHomeContentError
      })
    );
  };

  const onFetchHomeContentSuccess = homeContent => {
    dispatch(setHomeContent({ payload: homeContent }));
  };

  const fetchHomeContentError = error => {
    console.log(error);
  };

  const fetchMap = (slug) => {
    dispatch(
      apiRequest({
        method: "GET",
        url: `${mapNameSpace}/map/${slug}`,
        onSuccess: onFetchMapSuccess,
        onError: fetchMapError
      })
    );
  };

  const onFetchMapSuccess = map => {
    dispatch(setMapContent({ payload: map }));
  };

  const fetchMapError = error => {
    console.log(error);
  };

  return {
    fetchGridPortraits,
    fetchGridIcons,
    fetchMenuItems,
    fetchEvents,
    fetchHomeContent,
    fetchMap
  };
}
