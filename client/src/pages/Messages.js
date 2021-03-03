import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReceivedMessageItem from "./ReceivedMessageItem";
import SentMessageItem from "./SentMessageItem";

const useStyles = makeStyles((theme) => ({
  messages: {
    flex: "0.70",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    padding: "30px",
    boxShadow: "3px 3px 5px 3px #ccc",
    borderRadius: "5px",
  },
  messagesContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    flex: 1,
    overflow: "scroll",
  },
  form: {
    width: "100%",
    padding: "10px",
  },
  input: {
    width: "100%",
    padding: "20px",
    backgroundColor: "#F2F2F2",
    outline: "none",
    border: "none",
    borderRadius: "10px",
  },
}));

function Messages({ conversationId, username, currentUser }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const classes = useStyles();
  useEffect(() => {
    if (conversationId) {
      axios
        .get(`/messages/${conversationId}`)
        .then((result) => {
          setMessages(result.data.messages);
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        })
        .catch((error) => console.log(error));
    }
  }, [conversationId, currentUser?._id]);

  const sendMessage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!newMessage) return;
    axios
      .post("/messages", {
        conversationId: conversationId,
        content: newMessage,
        author: currentUser._id,
      })
      .then(() => setNewMessage(""))
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.messages}>
      {conversationId && (
        <div className={classes.header}>
          <Typography variant="h2">{username}</Typography>
        </div>
      )}
      <div className={classes.messagesContainer}>
        {messages.map((message) =>
          message.sender._id === currentUser._id ? (
            <SentMessageItem
              key={message._id}
              content={message.content}
              date={new Date(message.timestamp)}
            />
          ) : (
            <ReceivedMessageItem
              key={message._id}
              content={message.content}
              author={message.sender}
              date={new Date(message.timestamp)}
            />
          )
        )}
        <div ref={messagesEndRef} />
      </div>
      {conversationId && (
        <form className={classes.form}>
          <input
            value={newMessage}
            className={classes.input}
            placeholder="Type something..."
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit" onClick={(e) => sendMessage(e)}></button>
        </form>
      )}
    </div>
  );
}

export default Messages;
