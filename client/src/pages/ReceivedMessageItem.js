import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  receivedMessageItem: {
    alignSelf: "flex-start",
    maxWidth: "50%",
    margin: "5px",
    display: "flex",
    alignItems: "flex-start",
  },
  avatar: {
    height: "35px",
    width: "35px",
    marginTop: "5px",
  },
  textContainer: {
    marginLeft: "5px",
  },
  userTimestampContainer: {
    display: "flex",
  },
  content: {
    backgroundColor: "#3A8DFF",
    borderRadius: "10px",
    padding: "5px",
  },
}));

function ReceivedMessageItem({ author, imageURL, content, date }) {
  const classes = useStyles();
  return (
    <div className={classes.receivedMessageItem}>
      <Avatar className={classes.avatar} src={imageURL} />
      <div className={classes.textContainer}>
        <div className={classes.userTimestampContainer}>
          <Typography variant="body1">{author.username}</Typography>
          <Typography variant="body1">{`\xa0\xa0${date.getHours()}:${date.getMinutes()}`}</Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="body2">{content}</Typography>
        </div>
      </div>
    </div>
  );
}

export default ReceivedMessageItem;
