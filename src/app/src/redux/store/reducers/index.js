import { combineReducers } from "redux";
import { gridPortraitsReducer } from "./gridPortaits";

export const rootReducer = combineReducers({
  gridPortraits: gridPortraitsReducer
});
