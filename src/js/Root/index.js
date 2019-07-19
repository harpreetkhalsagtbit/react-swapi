import React from "react";
// import { Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import routes from "../Routes";
import { history } from "../Helpers/history";

export default class Root extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {routes.map((props, key) => (
            <Route key={key} {...props} />
          ))}
          <Route render={() => <NotFound />} />
        </Switch>
      </Router>
    );
  }
}

let NotFound = () => <h1>Not Found</h1>;
