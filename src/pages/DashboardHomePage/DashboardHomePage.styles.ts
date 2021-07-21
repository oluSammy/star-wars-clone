import { makeStyles } from "@material-ui/core";

const DashboardHomeStyles = makeStyles((theme) => ({
  root: {},
  nav: {
    backgroundColor: "white",
    display: "flex",
    padding: "1.2rem 6rem",
    borderLeft: "2px solid #DBE3EE",
    borderBottom: "2px solid #DBE3EE",
  },
  selectbox: {
    marginLeft: "auto",
    display: "flex",
  },
  select: {
    border: "1.6px solid #EFEFEF",
    fontSize: "2rem",
    color: "#8D99AE",
    padding: ".5rem 2rem",
    fontWeight: 500,
    appearance: "none",
    width: "19rem",
    backgroundColor: "#FAFAFA",

    "&:focus": {
      outline: "3px solid #FFF6D3 !important",

      "& option": {
        border: "1.6px solid #EFEFEF",
      },
    },
  },
  option: {
    fontSize: "2rem",
    color: "#8D99AE",
    border: "1.6px solid #EFEFEF",
  },
  selectIcon: {
    marginLeft: "-26px",
    fontSize: "18px",
  },
  selectContainer: {},
  dashboardMain: {
    margin: "3rem 3rem 0 3rem",
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  filmTable: {
    // minWidth: "970px",
    // overflow: "scroll",
  },
}));

export default DashboardHomeStyles;
