import { TextField, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthenticationPhoto from "./AuthenticationPhoto";

const useStyles = makeStyles((theme) => ({
  authentication: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
  },
  textAreaContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    height: "100%",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    maxWidth: "600px",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  formHeader: {
    alignSelf: "flex-start",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
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
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const classes = useStyles();
  const history = useHistory();

  const textInputLabelProps = {
    shrink: true,
    style: { color: "gray" },
  };

  const validateForm = () => {
    let isValid = true;
    const tempErrors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    if (username.length === 0) {
      isValid = false;
      tempErrors["username"] = "Username must not be empty";
    }
    if (
      email.length === 0 ||
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email.toLowerCase()
      )
    ) {
      isValid = false;
      tempErrors["email"] = "Email format not valid";
    }
    if (password.length <= 6) {
      isValid = false;
      tempErrors["password"] = "Password must be more than 6 characters";
    }
    if (password !== confirmPassword) {
      isValid = false;
      tempErrors["confirmPassword"] = "Passwords do not match";
    }
    setErrors(tempErrors);
    return isValid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isFormValid = validateForm();
    // if the form is valid, send request to back end and show appropriate
    // error messages if needed
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
          <Typography className={classes.formHeader} variant="h4">
            {isSignupPage ? "Create an account." : "Welcome back!"}
          </Typography>
          <form className={classes.form}>
            {isSignupPage && (
              <TextField
                required
                error={errors.username.length > 0}
                helperText={errors.username}
                label="Username"
                type="text"
                color="primary"
                defaultValue={username}
                onChange={(e) => {
                  setErrors({ ...errors, username: "" });
                  setUsername(e.target.value);
                }}
                InputLabelProps={textInputLabelProps}
                margin="normal"
              />
            )}
            <TextField
              required
              error={errors.email.length > 0}
              helperText={errors.email}
              label="Email"
              type="email"
              color="primary"
              defaultValue={email}
              onChange={(e) => {
                setErrors({ ...errors, email: "" });
                setEmail(e.target.value);
              }}
              InputLabelProps={textInputLabelProps}
              margin="normal"
            />
            <TextField
              required
              error={errors.password.length > 0}
              helperText={errors.password}
              label="Password"
              type="password"
              color="primary"
              defaultValue={password}
              onChange={(e) => {
                setErrors({ ...errors, password: "" });
                setPassword(e.target.value);
              }}
              InputLabelProps={textInputLabelProps}
              margin="normal"
            />
            {isSignupPage && (
              <TextField
                required
                error={errors.confirmPassword.length > 0}
                helperText={errors.confirmPassword}
                label="Confirm password"
                type="password"
                color="primary"
                defaultValue={confirmPassword}
                onChange={(e) => {
                  setErrors({ ...errors, confirmPassword: "" });
                  setConfirmPassword(e.target.value);
                }}
                InputLabelProps={textInputLabelProps}
                margin="normal"
              />
            )}
            <Button
              fullWidth={false}
              color="primary"
              variant="contained"
              type="submit"
              onClick={(e) => submitForm(e)}
            >
              {isSignupPage ? "Create" : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
