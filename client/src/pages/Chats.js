import { Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import UserItem from "./UserItem";

const useStyles = makeStyles((theme) => ({
  chats: {
    flex: "0.30",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },
  currentUser: {
    display: "flex",
    alignItems: "center",
    padding: "10px 10px 30px 10px",
  },
  form: {
    width: "100%",
    padding: "10px 0",
  },
  input: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#F2F2F2",
    outline: "none",
    border: "none",
    borderRadius: "10px",
  },
  messagesUsersContainer: {
    flex: 1,
    overflow: "scroll",
  },
}));

function Chats({ currentUser, setConversationId, setUsername }) {
  const [userSearch, setUserSearch] = useState("");
  const [showUsers, setShowUsers] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`/conversations/${currentUser._id}`)
      .then((conversations) =>
        setConversations(conversations.data.conversations)
      )
      .catch((error) => console.log(error));
  }, [currentUser._id]);

  const searchUsers = (userQuery) => {
    setUserSearch(userQuery);
    !userQuery ? setShowUsers(false) : setShowUsers(true);
    axios
      .get("/users", {
        params: {
          username: userQuery,
        },
      })
      .then((response) =>
        setSearchedUsers(
          response.data.users.filter((user) => user._id !== currentUser._id)
        )
      )
      .catch((error) => console.log(error));
  };

  const selectUser = (conversationId, username) => {
    setUserSearch("");
    setShowUsers(false);
    setConversationId(conversationId);
    setUsername(username);
  };

  return (
    <div className={classes.chats}>
      <div className={classes.currentUser}>
        <Avatar src="" />
        <Typography variant="h2">{`\xa0\xa0${currentUser.username}`}</Typography>
      </div>
      <Typography variant="h2">{showUsers ? "Users" : "Chats"}</Typography>
      <form className={classes.form}>
        <input
          className={classes.input}
          placeholder="Search"
          value={userSearch}
          onChange={(e) => {
            searchUsers(e.target.value);
          }}
        />
      </form>
      <div className={classes.messagesUsersContainer}>
        {showUsers
          ? searchedUsers.map((user) => (
              <UserItem
                key={user._id}
                currentUser={currentUser}
                user={user}
                selectUser={(conversationId, username) =>
                  selectUser(conversationId, username)
                }
              />
            ))
          : conversations
              .filter((conversation) => conversation.lastMessage)
              .sort(
                (a, b) =>
                  new Date(b.lastMessage.timestamp) -
                  new Date(a.lastMessage.timestamp)
              )
              .map((conversation) => {
                return (
                  <ChatItem
                    key={conversation._id}
                    conversationId={conversation._id}
                    imgURL=""
                    username={
                      conversation.participants[0]._id === currentUser._id
                        ? conversation.participants[1].username
                        : conversation.participants[0].username
                    }
                    lastMessage={conversation.lastMessage}
                    setConversationId={setConversationId}
                    setUsername={setUsername}
                  />
                );
              })}
      </div>
    </div>
  );
}

export default Chats;
