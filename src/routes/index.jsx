import { Route, Switch } from "react-router";
import Beverages from "../pages/Beverages";
import Events from "../pages/Events";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
