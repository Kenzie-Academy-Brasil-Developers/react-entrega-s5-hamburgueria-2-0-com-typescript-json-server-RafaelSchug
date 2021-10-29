import { Switch, Route, useHistory } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";

const Routes = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        Produtos
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route>{() => history.push("/")}</Route>
    </Switch>
  );
};

export default Routes;
