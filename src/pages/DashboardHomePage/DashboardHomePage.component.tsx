import React, { useContext } from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard.component";
import DashboardHomeStyles from "./DashboardHomePage.styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FilmTable from "../../components/FilmTable/FilmTable.component";
import { SwapiContext } from "../../services/context/swapiContext";
import DoorDashFavorite from "../../components/ContentLoader/ContentLoader";
import cameraIcon from "../../assets/images/camera.svg";
import taxiIcon from "../../assets/images/taxi.svg";
import ufoIcon from "../../assets/images/ufo.svg";
import phylogeneticsIcon from "../../assets/images/phylogenetics.svg";
// phylogenetics

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
            <DashboardCard
              title="Films"
              count={films?.count}
              route="/dashboard"
              iconBg="#D5EED4"
              icon={cameraIcon}
            />
            <DashboardCard
              title="Starships"
              count={starShips?.count}
              route="/dashboard/starships"
              iconBg="#055CC13B"
              icon={ufoIcon}
            />
            <DashboardCard
              title="People"
              count={people?.count}
              route="/dashboard/people"
              iconBg="#E0DEF6"
              icon={cameraIcon}
            />
            <DashboardCard
              title="Vehicles"
              count={vehicles?.count}
              route="/dashboard/vehicles"
              iconBg="#FFFFF0"
              icon={taxiIcon}
            />
            <DashboardCard
              title="Species"
              count={species?.count}
              route="/dashboard/species"
              iconBg="#E0DEF6"
              icon={phylogeneticsIcon}
            />
          </div>
        )}
        <div
          className={classes.filmTable}
          // style={{ width: 700, overflowX: "scroll" }}
        >
          <FilmTable />
        </div>
      </main>
    </div>
  );
};

export default DashboardHomePage;
