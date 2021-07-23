import { makeStyles } from "@material-ui/core";

const starShipsTabbleStyles = makeStyles((theme) => ({
  root: {
    margin: "3rem 3rem 1rem 3rem",
    backgroundColor: "#FFFFFF",
  },
  table: {},
  tableHeader: {},
  tableRow: {
    border: "none !important",
    cursor: "pointer",

    "&:hover": {
      background: "#F5F7FA",
    },
  },
  tableCell: {
    borderBottom: "none",
  },
  tableBody: {},
  tablePadding: {},
  dotCell: {},
  tableHeading: {
    color: "#A3ABB7",
    fontWeight: 600,
    fontSize: "1.2rem",
  },
  tableText: {
    color: "#2C2C2C",
    fontSize: "1rem",
    fontWeight: 500,
  },
}));

export default starShipsTabbleStyles;
