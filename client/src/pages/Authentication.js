import {
  FormControl,
  TextField,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
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
  formHeader: {
    alignSelf: "flex-start",
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
}));

function Authentication({ isSignupPage }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showFormErrors, setShowFormErrors] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const showUsernameError = showFormErrors && username.length === 0;
  const showEmailError =
    showFormErrors &&
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.toLowerCase()
    );
  const showPasswordError = showFormErrors && password.length < 6;
  const showCofirmPasswordError =
    showFormErrors && password.length > 0 && password !== confirmPassword;

  const textInputLabelProps = {
    shrink: true,
    style: { color: "gray" },
  };

  const submitForm = () => {
    setShowFormErrors(true);
  };

  return (
    <div className={classes.authentication}>
      <AuthenticationPhoto />
      <div className={classes.textAreaContainer}>
        <div className={classes.messageContainer}>
          <Typography variant="body1">
            {isSignupPage
              ? "Already have an account?"
              : "Don't have an account?"}
          </Typography>
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
            <Typography className={classes.formHeader} variant="h4">
              {isSignupPage ? "Create an account." : "Welcome back!"}
            </Typography>
            <FormControl fullWidth={true}>
              {isSignupPage && (
                <TextField
                  required
                  error={showUsernameError}
                  helperText={
                    showUsernameError ? "Username must not be empty" : ""
                  }
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
                required
                error={showEmailError}
                helperText={showEmailError ? "Email format not valid" : ""}
                label="Email"
                type="email"
                color="primary"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={textInputLabelProps}
                margin="normal"
              />
              <TextField
                required
                error={showPasswordError}
                helperText={
                  showPasswordError ? "Must be minimum 6 characters" : ""
                }
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
                  required
                  error={showCofirmPasswordError}
                  helperText={
                    showCofirmPasswordError && "Paswords do not match"
                  }
                  label="Confirm password"
                  type="password"
                  color="primary"
                  defaultValue={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  InputLabelProps={textInputLabelProps}
                  margin="normal"
                  inputProps={{ maxLength: 6 }}
                />
              )}
            </FormControl>
            <Button
              fullWidth={false}
              color="primary"
              variant="contained"
              onClick={submitForm}
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
