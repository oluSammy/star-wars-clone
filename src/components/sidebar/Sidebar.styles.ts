import { makeStyles } from "@material-ui/core";

const sidebarStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "2rem",
  },
  logoBox: {
    paddingLeft: "4rem",
    // width: "18rem",
    // height: "10rem",
    // margin: "0 auto",
  },
  image: {
    //   height: '100%',
    // width: "100%",
    //   objectFit: 'cover',
  },
  navList: {
    marginTop: "3rem",
  },
  listItem: {
    paddingLeft: "4rem",
    marginBottom: "1.1rem",
  },
  activeNavLink: {
    borderRight: "2px solid #FDDB00",

    "& $ak": {
      fill: "#FDDB00",
    },
    "& $svgBg": {
      backgroundColor: "#FFFFF0",
    },
    "& $listText": {
      color: "#000000",
    },
  },
  svgBg: {
    backgroundColor: "#F2F2F2",
    width: "2.8rem",
    height: "2.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  listIcon: {},
  // F2F2F2
  ak: {
    fill: "#A3ABB7",
    width: "1.6rem",
    height: "1.6rem",

    "&:hover": {
      fill: "green",
    },
  },
  listText: {
    color: "#A3ABB7",
    fontSize: "1.6rem",
    fontWeight: 700,
    textTransform: "capitalize",
    marginLeft: "-.5rem",
  },
}));

export default sidebarStyles;
