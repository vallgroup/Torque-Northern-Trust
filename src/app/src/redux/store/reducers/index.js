import { combineReducers } from "redux";
import { gridPortraitsReducer } from "./gridPortaits";
import { gridIconsReducer } from "./gridIcons";
import { menuItemsReducer } from "./menuItems";
import { eventsReducer } from "./events";
import { mapReducer } from "./map";
import { currentEventReducer } from "./currentEvent";
import { homeContentReducer } from "./homeContent";

export const rootReducer = combineReducers({
  gridPortraits: gridPortraitsReducer,
  gridIcons: gridIconsReducer,
  menuItems: menuItemsReducer,
  events: eventsReducer,
  mapContent: mapReducer,
  currentEvent: currentEventReducer,
  homeContent: homeContentReducer
});
