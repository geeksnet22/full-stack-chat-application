import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  sentMessageItem: {
    alignSelf: "flex-end",
    maxWidth: "50%",
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  content: {
    backgroundColor: "whitesmoke",
    borderRadius: "10px",
    padding: "5px",
  },
}));

function SentMessageItem({ content, date }) {
  const classes = useStyles();
  return (
    <div className={classes.sentMessageItem}>
      <Typography variant="body1">{`${date.getHours()}:${date.getMinutes()}`}</Typography>
      <div className={classes.content}>
        <Typography variant="body1">{content}</Typography>
      </div>
    </div>
  );
}

export default SentMessageItem;
