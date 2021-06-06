import { Route, Switch } from "react-router";
import Beverages from "../pages/Beverages";
import Events from "../pages/Events";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route path="/events/:event">
          <Events />
        </Route>
        <Route path="/beverages">
          <Beverages />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
