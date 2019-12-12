import { combineReducers } from "redux";
import { gridPortraitsReducer } from "./gridPortaits";
import { gridIconsReducer } from "./gridIcons";

export const rootReducer = combineReducers({
  gridPortraits: gridPortraitsReducer,
  gridIcons: gridIconsReducer
});
