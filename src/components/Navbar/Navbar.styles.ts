import { makeStyles } from "@material-ui/core";

const navBarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 3rem",

    "& *": {
      // border: '1px solid orangered'
    },
  },
  navContent: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: "1.7rem",
    fontWeight: "normal",
  },
  navList: {
    display: "flex",
    alignItems: "center",
    listStyleType: "none",
  },
  navIcon: {
    marginLeft: "2rem",
    // position: "relative",
  },
  greyIcon: {
    "&::after": {
      content: ".",
      color: "red",
      fontSize: "4rem",
    },
  },
  navImgBox: {
    height: "4rem",
    width: "4rem",
    marginLeft: "3rem",
  },
  navImg: {
    height: "100%",
    width: "100%",
    display: "block",
    objectFit: "cover",
  },
  dot: {
    width: "5px",
    height: "5px",
    backgroundColor: "red",
    position: "absolute",
    top: "5px",
    borderRadius: "50%",
    right: "4px",
  },
}));

export default navBarStyles;
