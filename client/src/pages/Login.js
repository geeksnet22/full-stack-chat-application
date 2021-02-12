import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import CoverPhoto from "./CoverPhoto";
import FormContainer from "./FormContainer";
import { Button } from "@material-ui/core";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const processLogin = () => {
    // send login request to back-end and approproate action
  };

  return (
    <div className="signup">
      <CoverPhoto />
      <div className="text__area__container">
        <div className="login__message__container">
          <p>Don't have an account?</p>
          <Button variant="contained" onClick={() => history.push("/signup")}>
            Create account
          </Button>
        </div>
        <div className="form__container">
          <h4>Welcome back!</h4>
          <FormContainer
            email={email}
            setEmail={(email) => setEmail(email)}
            password={password}
            setPassword={(password) => setPassword(password)}
          />
          <Button
            fullWidth={false}
            color="primary"
            variant="contained"
            onClick={() => processLogin()}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
