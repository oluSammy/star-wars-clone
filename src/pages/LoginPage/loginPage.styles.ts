import { makeStyles } from "@material-ui/core";

const loginStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    position: "relative",

    "@media (max-width: 611px)": {
      flexDirection: "column",
    },
  },
  welcome: {
    flex: 0.3,
    background: "#FFF6D3 0% 0% no-repeat padding-box",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",

    "@media (max-width: 737px)": {
      flex: 0.4,
    },

    "@media (max-width: 611px)": {
      minHeight: "1rem",
      flexDirection: "row",
      flex: 0,
    },
  },
  login: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: "3rem",
    display: "flex",
    flexDirection: "column",

    "@media (max-width: 737px)": {
      flex: 0.6,
    },
    "@media (max-width: 611px)": {
      flex: 1,
    },
  },
  spaceTop: {
    paddingTop: "18%",

    "@media (max-width: 611px)": {
      paddingTop: "3rem",
    },
  },
  shipBg: {
    width: "90%",
    marginBottom: "auto",
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 611px)": {
      width: "40%",
      justifyContent: "flex-end",
    },
  },
  welcomeBox: {
    width: "60%",
    margin: "0 auto",

    "@media (max-width: 611px)": {
      width: "90%",
    },
  },
  welcomeTitle: {
    color: "#001A03",
    fontSize: "2rem",
    fontWeight: 700,
    fontFamily: "Poppins, sans-serif",
    marginBottom: "1rem",

    "@media (max-width: 611px)": {
      fontSize: "1rem",
      marginLeft: "3rem",
    },
  },
  blackBg: {
    backgroundColor: "#000000",
    width: "100%",

    "@media (max-width: 611px)": {
      display: "none",
    },
  },
  svgFlex: {
    display: "flex",
    marginLeft: "10px",
  },
  svgImg: {
    marginLeft: "auto",
    marginRight: "4%",
    width: "18rem",

    "@media (max-width: 611px)": {
      width: "7rem",
      // height: "1rem",
    },
  },
  loginContainer: {
    marginTop: "3.5%",
    marginBottom: "auto",

    "@media (max-width: 611px)": {
      marginTop: "-8.5%",
      marginBottom: "auto",
      height: "100%",
    },
  },
  footer: {
    display: "flex",
    marginBottom: "1rem",
    color: "#859BBCF5",
    marginLeft: "3%",
    alignItems: "center",
  },
  copy: {
    marginRight: "20%",
    fontSize: "1.3rem",

    "@media (max-width: 366px)": {
      marginRight: "10%",
      fontSize: ".8rem",
    },
  },
  list: {
    display: "flex",
    marginRight: "5%",
    listStyleType: "none",

    "@media (max-width: 366px)": {
      marginRight: "3%",
    },
  },
  listItem: {
    padding: "0 1rem",
    fontSize: "1.3rem",

    "&:not(:last-child)": {
      borderRight: "1px solid currentColor",
    },

    "@media (max-width: 666px)": {
      fontSize: "1rem",
    },
  },
  last: {
    fontSize: "1.3rem",
    display: "flex",
    alignItems: "center",

    "@media (max-width: 366px)": {
      fontSize: "1rem",
    },
  },
  footerIcon: {
    marginTop: "5px",
  },
  makeImg: {
    width: "80%",
    margin: "0 auto",

    "@media (max-width: 611px)": {
      width: "25%",
    },
  },
}));

export default loginStyles;
