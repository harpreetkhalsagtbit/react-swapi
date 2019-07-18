/**
 * Root Reducer
 */

import { combineReducers } from "redux";
import login from "./Login";

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
//   IndexedDB,
//   Offline,
//   Entities,
//   EntityValues
});
