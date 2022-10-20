import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext/Context/AppContext";
import { StateMachines } from "./context/StateMachines/StateMachines";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter basename={"/"}>
        <StateMachines>
          <App />
        </StateMachines>
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
