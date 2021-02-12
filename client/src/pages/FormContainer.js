import React from "react";
import { FormControl, TextField } from "@material-ui/core";
import "./FormContainer.css";

function FormContainer({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) {
  return (
    <div className="formContainer">
      <FormControl fullWidth={true}>
        {username !== undefined && (
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
        {confirmPassword !== undefined && (
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
    </div>
  );
}

export default FormContainer;
