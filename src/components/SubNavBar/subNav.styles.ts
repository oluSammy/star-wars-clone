import { makeStyles } from "@material-ui/core";

const subNavStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: "1rem 3rem",
    background: "#FFFFFF",
    borderLeft: "2px solid #DBE3EE",
  },
  navBack: {
    fontSize: "1.2rem",
    padding: ".51rem 1.5rem",
    fontWeight: 700,
    marginRight: "3rem",
  },
  navBackIcon: {
    fontSize: "1.3rem !important",
    fontWeight: 600,
  },
  total: {
    color: "#2C2C2C",
    fontSize: "1.4rem",
    textTransform: "capitalize",
    fontWeight: 500,
    marginRight: "3rem",
  },
  page: {
    color: "#2C2C2C",
    fontSize: "1.4rem",
    textTransform: "capitalize",
    fontWeight: 500,
    marginRight: "3rem",
  },
  navigation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "6rem",
  },
  navigationIcon: {
    cursor: "pointer",
  },
  searchBox: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  search: {
    border: "1px solid #DBE3EE",
    backgroundColor: "#FAFAFA",
    padding: "1rem 2rem",
    width: "25rem",
    fontSize: "1.6em",
    fontWeight: 700,
    color: "##8D99AE",

    "&:placeholder": {
      color: "##8D99AE",
      fontSize: "1.6rem",
      fontWeight: 700,
    },

    "&:focus": {
      border: "1px solid #DBE3EE",
      outline: "2px solid #DBE3EE",
    },
  },
  searchIcon: {
    position: "absolute",
    right: "10px",
  },
}));

export default subNavStyles;
