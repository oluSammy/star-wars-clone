import { Switch, Route, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard.component";
import LoginPage from "../pages/LoginPage/LoginPage.component";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
