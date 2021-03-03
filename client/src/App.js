import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import { theme } from "./themes/theme";
import Authentication from "./pages/Authentication";
import ChatWindow from "./pages/ChatWindow";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    setCurrentUser(loggedInUser ? JSON.parse(loggedInUser) : null);
  }, []);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/">
            <Redirect to={currentUser ? "/chatWindow" : "/register"} />
          </Route>
          <Route
            path="/register"
            render={(props) => (
              <Authentication
                {...props}
                isSignupPage={true}
                setCurrentUser={(currentUser) => setCurrentUser(currentUser)}
              />
            )}
          />
          <Route
            path="/login"
            render={(props) => (
              <Authentication
                {...props}
                isSignupPage={false}
                setCurrentUser={(currentUser) => setCurrentUser(currentUser)}
              />
            )}
          />
          <Route
            path="/chatWindow"
            render={(props) => (
              <ChatWindow {...props} currentUser={currentUser} />
            )}
          />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
