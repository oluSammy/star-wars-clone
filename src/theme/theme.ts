import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          fontSize: "62.5%",

          "@media (max-width: 1021px)": {
            fontSize: "55%",
          },
        },
        body: {
          "& *": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            fontFamily: "Rubik sans-serif",
          },
        },
      },
    },
  },
});

export default theme;
