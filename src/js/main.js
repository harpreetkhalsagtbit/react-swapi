import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Root from "./Root";
import rootReducer from "./Reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById("root")
  );

  export default render;