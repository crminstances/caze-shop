import React from 'react';
import {routes} from '../routes';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

export default function MenuBar() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route
                key={i}
                path={route.path}
                render={props => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props} routes={route.routes} />
                )}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}