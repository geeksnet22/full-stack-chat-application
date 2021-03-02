import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chatItem: {
    display: "flex",
    alignItems: "flex-start",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 0 2px whitesmoke",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "whitesmoke",
    },
  },
  textAreaContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  unseenMessages: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20px",
    width: "20px",
    borderRadius: "10px",
    backgroundColor: "#3A8DFF",
  },
}));

function ChatItem({
  conversationId,
  imageURL,
  username,
  lastMessage,
  setConversationId,
  setUsername,
}) {
  const classes = useStyles();

  return (
    <div
      className={classes.chatItem}
      onClick={() => {
        setConversationId(conversationId);
        setUsername(username);
      }}
    >
      <Avatar src={imageURL} />
      <div className={classes.textAreaContainer}>
        <div>
          <Typography variant="h5">{username}</Typography>
          <Typography variant="body1">
            {lastMessage ? lastMessage.content : ""}
          </Typography>
        </div>
        {/* <div className={classes.unseenMessages}>
          <Typography variant="body2">{2}</Typography>
        </div> */}
      </div>
    </div>
  );
}

export default ChatItem;
