import { FormControl, TextField, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
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
    justifyContent: "center",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-100px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-10px",
    },
  },
  formBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: "100px",
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

function Authentication() {
  const [isSignupPage, setIsSignupPage] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.authentication}>
      <AuthenticationPhoto />
      <div className={classes.textAreaContainer}>
        <div className={classes.formContainer}>
          <div className={classes.messageContainer}>
            <p className={classes.p}>Don't have an account?</p>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => setIsSignupPage(!isSignupPage)}
            >
              Create account
            </Button>
          </div>
          <div className={classes.formBody}>
            <h4 className={classes.h4}>
              {isSignupPage ? "Create an account." : "Welcome back!"}
            </h4>
            <FormControl fullWidth={true}>
              {isSignupPage && (
                <TextField
                  label="Username"
                  type="text"
                  color="primary"
                  defaultValue={username}
                  onChange={(e) => setUsername(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                    style: { color: "gray" },
                  }}
                  margin="normal"
                />
              )}
              <TextField
                label="Email"
                type="email"
                color="primary"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                  style: { color: "gray" },
                }}
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                color="primary"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                  style: { color: "gray" },
                }}
                margin="normal"
              />
              {isSignupPage && (
                <TextField
                  label="Confirm password"
                  type="password"
                  color="primary"
                  defaultValue={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                    style: { color: "gray" },
                  }}
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
