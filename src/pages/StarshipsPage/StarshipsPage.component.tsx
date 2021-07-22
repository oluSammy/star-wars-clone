import React from "react";
import subNavStyles from "../../components/SubNavBar/subNav.styles";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const StarshipPage = () => {
  const navStyles = subNavStyles();
  const history = useHistory();
  return (
    <div>
      <nav className={navStyles.root}>
        <Button
          className={navStyles.navBack}
          startIcon={<ArrowBackIosIcon className={navStyles.navBackIcon} />}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <p className={navStyles.total}>200 total</p>
        <p className={navStyles.page}>Showing 1-20 of 200</p>
        <p className={navStyles.navigation}>
          <IconButton>
            <ArrowBackIosIcon className={navStyles.navigationIcon} />
          </IconButton>

          <IconButton>
            <ArrowForwardIosRoundedIcon className={navStyles.navigationIcon} />
          </IconButton>
        </p>
        <div className={navStyles.searchBox}>
          <input
            type="search"
            name="search"
            className={navStyles.search}
            placeholder="Search for starship"
          />
          <SearchOutlinedIcon className={navStyles.searchIcon} />
        </div>
      </nav>
      Hello StarShips Pages
    </div>
  );
};

export default StarshipPage;
