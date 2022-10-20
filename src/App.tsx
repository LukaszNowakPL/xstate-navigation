import React, { Component } from "react";
import { MainRouter } from "./components/MainRouter/MainRouter";
import { Container, CssBaseline } from "@mui/material";

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Container maxWidth={"sm"}>
          <MainRouter />
        </Container>
      </>
    );
  }
}

export default App;
