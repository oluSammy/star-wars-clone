import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes/routes";
// loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SwapiContextProvider from "./services/context/swapiContext";

function App() {
  return (
    <div className="App">
      <SwapiContextProvider>
      <CssBaseline />
      <Routes />
      </SwapiContextProvider>
    </div>
  );
}

export default App;
