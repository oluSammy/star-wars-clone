import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes/routes";
// loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Routes />
    </div>
  );
}

export default App;
