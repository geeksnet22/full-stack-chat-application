import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Chats from "./Chats";
import Messages from "./Messages";

const useStyles = makeStyles((theme) => ({
  chatWindow: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
}));

function ChatWindow({ currentUser }) {
  const [conversationId, setConversationId] = useState(null);
  const [username, setUsername] = useState(null);
  const classes = useStyles();

  return (
    <div className={classes.chatWindow}>
      {currentUser && (
        <Chats
          currentUser={currentUser}
          setConversationId={(conversationId) =>
            setConversationId(conversationId)
          }
          setUsername={(username) => setUsername(username)}
        />
      )}
      {
        <Messages
          conversationId={conversationId}
          username={username}
          currentUser={currentUser}
        />
      }
    </div>
  );
}

export default ChatWindow;
