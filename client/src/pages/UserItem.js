import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React from "react";

const useStyles = makeStyles((theme) => ({
  userItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderRadius: "10px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "whitesmoke",
    },
  },
}));

function UserItem({ currentUser, user, selectUser }) {
  const classes = useStyles();

  const handleClick = () =>
    axios
      .post("/conversations", { participants: [user._id, currentUser._id] })
      .then((response) =>
        selectUser(
          response.data.createConversation.conversationId,
          user.username
        )
      )
      .catch((error) =>
        error.response.status === 409
          ? selectUser(
              error.response.data.createConversation.conversationId,
              user.username
            )
          : console.log(error)
      );
  return (
    <div className={classes.userItem} onClick={handleClick}>
      <Avatar src={user.imageURL} alt={user.username} />
      <Typography variant="h5">{`\xa0\xa0${user.username}`}</Typography>
    </div>
  );
}

export default UserItem;
