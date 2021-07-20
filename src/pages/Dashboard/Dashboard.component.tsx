import React from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import dashboardStyles from "./dashboard.styles";
import { Switch, useRouteMatch, Route, useLocation } from "react-router-dom";
import DashboardHomePage from "../DashboardHomePage/DashboardHomePage.component";
import StarshipPage from "../StarshipsPage/StarshipsPage.component";
import PeoplePage from "../People/People.component";
import VehiclesPage from "../VehiclesPage/VehiclesPage.component";
import SpeciesPage from "../Species/SpeciesPage.component";

const Dashboard = () => {
  const classes = dashboardStyles();
  let { path } = useRouteMatch();
  const location = useLocation();
  return (
    <div className={classes.root}>
      <div className={classes.striped}>
        <div className={classes.dashboardContainer}>
          <div className={classes.dashboardSideBar}>
            <Sidebar />
          </div>
          <div className={classes.dashboardContent}>
            <nav className={classes.dashboardNav}>
              <Navbar />
            </nav>
            <main className={classes.dashboardMain}>
              <Switch location={location} key={location.pathname}>
                <Route exact path={path} component={DashboardHomePage} />
                <Route path={`${path}/starships`} component={StarshipPage} />
                <Route path={`${path}/people`} component={PeoplePage} />
                <Route path={`${path}/vehicles`} component={VehiclesPage} />
                <Route path={`${path}/species`} component={SpeciesPage} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
