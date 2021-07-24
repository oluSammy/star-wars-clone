import { makeStyles } from "@material-ui/core";

const peopleTableStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem 2rem 1rem 2rem",
  },
  table: {},
  tableHeading: {
    color: "#A3ABB7",
    fontWeight: 600,
    fontSize: "1.2rem",
  },
  tableCell: {
    borderBottom: "none",
  },
  tableBody: {},
  tableRow: {
    border: "none !important",
    cursor: "pointer",

    "&:hover": {
      background: "#F5F7FA",
    },
  },
  tableHeader: {},
  tablePadding: {},
  tableText: {
    color: "#2C2C2C",
    fontSize: "1rem",
    fontWeight: 500,
  },
  dotCell: {},
  tableImgBox: {
    height: "2.2rem",
    width: "2.2rem",
    marginRight: "5px",
  },
  tableImg: {
    width: "100%",
    height: "100%",
  },
  linkText: {},
}));

export default peopleTableStyles;
