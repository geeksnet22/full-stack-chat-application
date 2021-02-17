import { FormControl, TextField, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthenticationPhoto from "./AuthenticationPhoto";

const useStyles = makeStyles((theme) => ({
  authentication: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  textAreaContainer: {
    flex: "0.55",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      flex: 1,
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  formBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  p: {
    fontSize: "0.8rem",
    color: "gray",
  },
  h4: {
    fontSize: "1.5rem",
    alignSelf: "flex-start",
  },
}));

function Authentication({ isSignupPage }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const textInputLabelProps = {
    shrink: true,
    style: { color: "gray" },
  };

  return (
    <div className={classes.authentication}>
      <AuthenticationPhoto />
      <div className={classes.textAreaContainer}>
        <div className={classes.messageContainer}>
          <p className={classes.p}>
            {isSignupPage
              ? "Already have an account"
              : "Don't have an account?"}
          </p>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => history.push(isSignupPage ? "/login" : "/register")}
          >
            {isSignupPage ? "Login" : "Create account"}
          </Button>
        </div>
        <div className={classes.formContainer}>
          <div className={classes.formBody}>
            <h4 className={classes.h4}>
              {isSignupPage ? "Create an account." : "Welcome back!"}
            </h4>
            <FormControl fullWidth={true}>
              {isSignupPage && (
                <TextField
                  required={true}
                  label="Username"
                  type="text"
                  color="primary"
                  defaultValue={username}
                  onChange={(e) => setUsername(e.target.value)}
                  InputLabelProps={textInputLabelProps}
                  margin="normal"
                />
              )}
              <TextField
                required={true}
                label="Email"
                type="email"
                color="primary"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={textInputLabelProps}
                margin="normal"
              />
              <TextField
                required={true}
                label="Password"
                type="password"
                color="primary"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={textInputLabelProps}
                margin="normal"
              />
              {isSignupPage && (
                <TextField
                  required={true}
                  label="Confirm password"
                  type="password"
                  color="primary"
                  defaultValue={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  InputLabelProps={textInputLabelProps}
                  margin="normal"
                />
              )}
            </FormControl>
            <Button
              fullWidth={false}
              color="primary"
              variant="contained"
              onClick={() => {}}
            >
              {isSignupPage ? "Create" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
