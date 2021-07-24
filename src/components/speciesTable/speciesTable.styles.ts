import { makeStyles } from "@material-ui/core";

const speciesTableStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem 2rem 1rem 2rem",
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
  tableHeading: {
    color: "#A3ABB7",
    fontWeight: 600,
    fontSize: "1.2rem",
  },
  tableCell: {
    borderBottom: "none",
  },
  tableBody: {},
  tablePadding: {},
  tableText: {
    color: "#2C2C2C",
    fontSize: "1rem",
    fontWeight: 500,
  },
  tableImgBox: {},
  tableImg: {},
  linkText: {},
}));

export default speciesTableStyles;
