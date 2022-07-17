import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => {
                return (
                  <li>
                    <NavLink to={to} activeClassName="nav-active" exact>
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ to, Component }) => {
              return (
                <Route path={to}>
                  <Component />
                </Route>
              );
            })}
            <Route path="/*">
              <Redirect to="lazy1" />
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
