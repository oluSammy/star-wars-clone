import { makeStyles } from "@material-ui/core";

const filmTable = makeStyles((theme) => ({
  root: {},
  container: {
    background: "#FFFFFF",
    padding: "2rem 2rem",
    // borderRadius: "20px",
    marginTop: "4rem",
    marginBottom: "4rem",

    // "@media (max-width: 971px)": {
      // },
    },
    films: {
      fontSize: "2rem",
      fontFamily: "Rubik sans-serif",
      color: "#2C2C2C",
    },
    table: {
    border: "none !important",
  },
  tableHeading: {
    color: "#A3ABB7",
    fontWeight: 600,
    fontSize: "1rem",
  },
  tableText: {
    color: "#2C2C2C",
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  linkText: {
    //178924
    color: "#178924",
    fontSize: "1.2rem",
    fontWeight: 600,
  },
  tableImgBox: {
    height: "2.2rem",
    width: "2.2rem",
    marginRight: "5px",
  },
  tableImg: {
    width: "100%",
    height: "100%",
  },
  tableRow: {
    border: "none !important",
    cursor: "pointer",

    "&:hover": {
      background: "#F5F7FA",
    },
  },
  tableHeader: {},
  tableBody: {},
  tableCellBold: {},
  tablePadding: {},
  tableCell: {
    borderBottom: "none",
  },
  deleteIcon: {},
  dotCell: {},
}));

export default filmTable;
