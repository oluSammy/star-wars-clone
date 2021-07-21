import { makeStyles } from "@material-ui/core";

const dashboardStyles = makeStyles((theme) => ({
  root: {
    // backgroundImage:
    //   "linear-gradient(90deg, #DEDDEE 0.70%, transparent 0.70%, transparent 50%, #DEDDEE 50%, #DEDDEE 50.70%, transparent 50.70%, transparent 100%)",
    // backgroundSize: "142.00px 142.00px",
    minHeight: "100vh",
  },
  striped: {
    // backgroundImage:
    //   "linear-gradient(0deg, #EFEFEF 0.70%, transparent 0.70%, transparent 50%, #EFEFEF 50%, #EFEFEF 50.70%, transparent 50.70%, #ffffff 100%)",
    // backgroundSize: "142.00px 142.00px",
    backgroundColor: "#f6f6f6",
    minHeight: "100vh",
  },
  dashboardContainer: {
    display: "flex",
  },
  dashboardSideBar: {
    flex: 0.2,
    backgroundColor: "#FFFFFF",
    minHeight: "100vh",
    // borderRight: "1px solid #DBE3EE",
    "@media (max-width: 971px)": {
      flex: 0,
      display: "none",
    },
  },
  dashboardContent: {
    flex: 0.8,

    "@media (max-width: 971px)": {
      flex: 1,
    },
  },
  dashboardNav: {
    backgroundColor: "#FFFFFF",
    borderLeft: "2px solid #DBE3EE",
    borderBottom: "1px solid #DBE3EE",
  },
  dashboardMain: {},
}));

export default dashboardStyles;
