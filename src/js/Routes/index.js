import React from "react";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import { Redirect } from "react-router-dom";

const isAuthenticated = false;
export default [
  {
    path: "/",
    exact: true,
    render(props) {
      console.log("rendering route");
      var token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        return <Home />;
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
      if (isAuthenticated) {
        return (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      } else {
        return <Login />;
      }
    }
  }
];
