import { makeStyles } from "@material-ui/core";
import React from "react";
import signupImage from "../images/bg-img.png";
import bubble from "../images/bubble.svg";

const useStyles = makeStyles((theme) => ({
  authenticationPhoto: {
    position: "relative",
    flex: "0.45",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  authenticationPhotoImage: {
    width: "100%",
    height: "100%",
  },
  overlapContentContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#3a8dff",
    opacity: "85%",
    padding: "40px",
    backgroundImage: "linear-gradient('#3a8dff', '#86b9ff')",
  },
  overlapContentContainerImage: {
    width: "50px",
  },
  overlapContentContainerText: {
    color: "#ffffff",
    fontSize: "1.5rem",
    marginTop: "30px",
    marginBottom: "100px",
  },
}));

function AuthenticationPhoto() {
  const classes = useStyles();
  return (
    <div className={classes.authenticationPhoto}>
      <img
        className={classes.authenticationPhotoImage}
        src={signupImage}
        alt="cover"
      />
      <div className={classes.overlapContentContainer}>
        <img
          className={classes.overlapContentContainerImage}
          src={bubble}
          alt="bubble"
        />
        <p className={classes.overlapContentContainerText}>
          Converse with anyone with any language
        </p>
      </div>
    </div>
  );
}

export default AuthenticationPhoto;