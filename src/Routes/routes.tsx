import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard.component";
import LoginPage from "../pages/LoginPage/LoginPage.component";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};


export default Routes;