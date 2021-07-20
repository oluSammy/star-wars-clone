import { makeStyles } from "@material-ui/core";
import starShip from "../../assets/images/astronaut.svg";

const loginStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    position: "relative",
  },
  welcome: {
    flex: 0.3,
    background: "#FFF6D3 0% 0% no-repeat padding-box",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  login: {
    flex: 0.7,
    backgroundColor: "#FFFFFF",
    paddingTop: "3rem",
    display: "flex",
    flexDirection: "column",
  },
  spaceTop: {
    paddingTop: "18%",
  },
  shipBg: {
    width: "90%",
    height: "60%",
    margin: "0 auto",
    backgroundImage: `url(${starShip})`,
    backgroundSize: "80%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    marginBottom: "auto",
  },
  welcomeBox: {
    width: "60%",
    margin: "0 auto",
  },
  welcomeTitle: {
    color: "#001A03",
    fontSize: "2rem",
    fontWeight: 700,
    fontFamily: "Poppins, sans-serif",
    marginBottom: "1rem",
  },
  blackBg: {
    backgroundColor: "#000000",
    width: "100%",
  },
  svgFlex: {
    display: "flex",
    marginLeft: "10px",
  },
  svgImg: {
    marginLeft: "auto",
    marginRight: "4%",
    width: "18rem",
  },
  loginContainer: {
    marginTop: "3.5%",
    marginBottom: "auto",
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
  },
  list: {
    display: "flex",
    marginRight: "5%",
    listStyleType: "none",
  },
  listItem: {
    padding: "0 1rem",
    fontSize: "1.3rem",

    "&:not(:last-child)": {
      borderRight: "1px solid currentColor",
    },
  },
  last: {
    fontSize: "1.3rem",
    display: "flex",
    alignItems: "center",
  },
  footerIcon: {
    marginTop: '5px'
  },
}));

export default loginStyles;
