import React from "react";
import { MuiThemeProvider, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import { theme } from "./themes/theme";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/">
            <Redirect to="/signup" />
          </Route>
          <Route path="/signup" component={Signup} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
