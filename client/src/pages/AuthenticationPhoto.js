import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import signupImage from "../images/bg-img.png";
import bubble from "../images/bubble.svg";

const useStyles = makeStyles((theme) => ({
  authenticationPhoto: {
    position: "relative",
    width: "60.71vh",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  authenticationPhotoImage: {
    height: "100%",
    objectFit: "contain",
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
    backgroundImage: "linear-gradient('#3a8dff', '#86b9ff')",
  },
  overlapContentContainerImage: {
    width: "50px",
  },
  overlapContentContainerText: {
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
        <Typography
          className={classes.overlapContentContainerText}
          variant="h3"
        >
          Converse with anyone with any language
        </Typography>
      </div>
    </div>
  );
}

export default AuthenticationPhoto;
