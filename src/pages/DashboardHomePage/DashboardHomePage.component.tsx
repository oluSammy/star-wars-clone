import React, { useContext } from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard.component";
import DashboardHomeStyles from "./DashboardHomePage.styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FilmTable from "../../components/FilmTable/FilmTable.component";
import { SwapiContext } from "../../services/context/swapiContext";
import DoorDashFavorite from "../../components/ContentLoader/ContentLoader";

const DashboardHomePage = () => {
  const classes = DashboardHomeStyles();
  const { films, starShips, people, vehicles, species, isLoading } =
    useContext(SwapiContext);

  console.log(films, "FILMU");
  console.log(isLoading, "ISLOA");

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <div className={classes.selectbox}>
          <div
            className={classes.selectContainer}
            style={{ marginRight: "20px" }}
          >
            <select name="cars" id="cars" className={classes.select}>
              <option className={classes.option} value="volvo">
                Current Year
              </option>
              <option className={classes.option} value="saab">
                last year
              </option>
            </select>
            <ArrowDropDownIcon className={classes.selectIcon} />
          </div>
          <div className={classes.selectContainer}>
            <select name="cars" id="cars" className={classes.select}>
              <option className={classes.option} value="volvo">
                Current Year
              </option>
              <option className={classes.option} value="saab">
                last year
              </option>
            </select>
            <ArrowDropDownIcon className={classes.selectIcon} />
          </div>
        </div>
      </div>
      <main className={classes.dashboardMain}>
        {isLoading ? (
          <div className={classes.cardContainer}>
            <DoorDashFavorite />
            <DoorDashFavorite />
            <DoorDashFavorite />
            <DoorDashFavorite />
          </div>
        ) : (
          <div className={classes.cardContainer}>
            <DashboardCard title="Films" count={films?.count} />
            <DashboardCard title="Starships" count={starShips?.count} />
            <DashboardCard title="People" count={people?.count} />
            <DashboardCard title="Vehicles" count={vehicles?.count} />
            <DashboardCard title="Species" count={species?.count} />
          </div>
        )}
      </main>
      <div className={classes.filmTable} style={{ overflow: "scroll" }}>
        <FilmTable />
      </div>
    </div>
  );
};

export default DashboardHomePage;
