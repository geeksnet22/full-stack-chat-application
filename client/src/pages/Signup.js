import React, { useState } from "react";
import "./LoginSignup.css";
import { useHistory } from "react-router-dom";
import CoverPhoto from "./CoverPhoto";
import FormContainer from "./FormContainer";
import { Button } from "@material-ui/core";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const processSignup = () => {
    // send signup request to back-end and take appropriate action
  };

  return (
    <div className="signup">
      <CoverPhoto />
      <div className="text__area__container">
        <div className="login__message__container">
          <p>Already have an account?</p>
          <Button variant="contained" onClick={() => history.push("/login")}>
            Login
          </Button>
        </div>
        <div className="form__container">
          <h4>Create an account.</h4>
          <FormContainer
            username={username}
            setUsername={(username) => setUsername(username)}
            email={email}
            setEmail={(email) => setEmail(email)}
            password={password}
            setPassword={(password) => setPassword(password)}
            confirmPassword={confirmPassword}
            setConfirmPassword={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
          />
          <Button
            fullWidth={false}
            color="primary"
            variant="contained"
            onClick={() => processSignup()}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
