import React from "react";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import { Redirect } from "react-router-dom";

export default [
  {
    path: "/",
    exact: true,
    render(props) {
      let token = localStorage.getItem("token");
      if (token) {
        return <Home {...props} />;
      } else {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }
    }
  },
  {
    path: "/login",
    exact: true,
    render(props) {
      let token = localStorage.getItem("token");
      if (token) {
        return (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      } else {
        return <Login />;
      }
    }
  }
];
