import React from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import dashboardStyles from "./dashboard.styles";

const Dashboard = () => {
  const classes = dashboardStyles();
  return (
    <div className={classes.root}>
      <div className={classes.striped}>
        <div className={classes.dashboardContainer}>
            <div className={classes.dashboardSideBar}>SideBar</div>
            <div className={classes.dashboardContent}>
                <nav className={classes.dashboardNav}>
                    <Navbar />
                </nav>
                <main className={classes.dashboardMain}></main>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
