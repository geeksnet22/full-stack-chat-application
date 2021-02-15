import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import { theme } from "./themes/theme";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/">
            <Redirect to="/authentication" />
          </Route>
          <Route path="/authentication" component={Authentication} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
