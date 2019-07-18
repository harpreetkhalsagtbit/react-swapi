/**
 * Root Reducer
 */

import { combineReducers } from "redux";
import login from "./Login";
import PlanetSearch from "./PlanetSearch";

let todos = (state = {}) => {
  return {
    list: []
  };
};

let counter = (state = {}) => {
  return {
    counter: 0
  };
};

export default combineReducers({
  todos,
  counter,
  login,
  PlanetSearch
//   IndexedDB,
//   Offline,
//   Entities,
//   EntityValues
});
