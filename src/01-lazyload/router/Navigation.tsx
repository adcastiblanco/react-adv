import { Link, Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const Navigation = () => {
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <>
      <ul>
        <li>
          <Link to={`${url}/lazy1`}>LazyPage1</Link>
        </li>
        <li>
          <Link to={`${url}/lazy2`}>LazyPage2</Link>
        </li>
        <li>
          <Link to={`${url}/lazy3`}>LazyPage3</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/lazy1`} component={LazyPage1} />
        <Route exact path={`${path}/lazy2`} component={LazyPage2} />
        <Route exact path={`${path}/lazy3`} component={LazyPage3} />
        <Redirect to={`${path}/lazy1`} />
      </Switch>
    </>
  );
};
