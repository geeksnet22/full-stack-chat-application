import React, { useState } from "react";
import "./Signup.css";
import signupImage from "../images/bg-img.png";
import bubble from "../images/bubble.svg";
import { Button, FormControl, TextField } from "@material-ui/core";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const processSignup = (e) => {
    e.preventDefault();
    // send signup request to back-end and take appropriate action
  };

  return (
    <div className="signup">
      <div className="image__container">
        <img src={signupImage} />
        <div className="overlap__content__container">
          <img src={bubble} alt="bubble" />
          <p>Converse with anyone with any language</p>
        </div>
      </div>
      <div className="text__area__container">
        <div className="login__message__container">
          <p>Already have an account?</p>
          <Button variant="contained">Login</Button>
        </div>
        <div className="form__container">
          <h4>Create an account.</h4>
          <FormControl fullWidth={true}>
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
          </FormControl>
          <Button fullWidth={false} color="primary" variant="contained">
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
