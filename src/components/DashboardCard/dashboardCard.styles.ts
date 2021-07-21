import { makeStyles } from "@material-ui/core";

const dashboardCardStyles = makeStyles((theme) => ({
  root: {
    background: "#FFFFFF",
    width: "20rem",
    marginBottom: "1rem",
    borderRadius: "10px",
    padding: "1.6rem",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all .2s ease-in-out",

    "@media (max-width: 766px)": {
      width: "17rem",
    },

    "&:hover": {
      // border: "1px solid yellow",
      transform: "scale(1.05)",
    },
  },
  cardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    color: "#04014E",
    fontSize: "1.7rem",
    fontWeight: 600,

    "@media (max-width: 766px)": {
      fontSize: "1.2rem",
    },
  },
  imgBox: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "1.5rem",
  },
  cardNumber: {
    marginTop: "5rem",
    color: "#161F6A",
    fontSize: "1.7rem",
    fontWeight: 600,
    marginBottom: "1rem",

    "@media (max-width: 766px)": {
      fontSize: "1.2rem",
    },
  },
  cardFooter: {},
  spanGreen: {
    color: "#5FB960",
    fontSize: "1rem",
    "@media (max-width: 766px)": {
      fontSize: "1rem",
    },
  },
  spanGrey: {
    color: "#666D92",
    fontSize: "1rem",
    "@media (max-width: 766px)": {
      fontSize: "1rem",
    },
  },
}));

export default dashboardCardStyles;
