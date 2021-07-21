import { makeStyles } from "@material-ui/core";

const loginStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    marginLeft: "10%",
    fontFamily: "Poppins",
    color: "#2B2D42",
    "@media (max-width: 861px)": {
      width: "45%",
    },
    "@media (max-width: 737px)": {
      width: "60%",
    },
    "@media (max-width: 383px)": {
      marginLeft: "7%",
      width: "70%",
    },
  },
  loginTitle: {
    fontSize: "2rem",
    fontWeight: 600,
    marginBottom: "3rem",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: ".5rem",
  },
  label: {
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: "6px",
  },
  input: {
    border: "1px solid #8D99AE",
    borderColor: "#8D99AE",
    padding: ".6rem .4rem",
    backgroundColor: "#FAFAFA",
    borderRadius: "4px",
    transition: "all .2s",
    fontSize: "1.9rem",

    "&::placeholder": {
      fontSize: "1rem",
      color: "#8D99AE",
    },
    "&:focus": {
      outline: "3px solid #FFF6D3 !important",
      //   border: "none",
      borderColor: "#FFF6D3",
    },
  },
  loginBtn: {
    backgroundColor: "#1F1F21",
    color: "#FFFFFF",
    width: "100%",
    padding: "1rem 2px",
    fontSize: "1.6rem",
    fontWeight: 600,

    "&:hover": {
      background: "#404040",
    },
  },
  errorMessage: {
    color: "red",
    fontSize: "1.3rem",
  },
  errorBox: {
    minHeight: "2rem",
  },
}));

// '&::placeholder': {
//     fontSize: 30,
//     color: '#AEBEC7',

//     '@media (max-width: 425px)': {
//       fontSize: 20,
//     },
// }

export default loginStyles;
