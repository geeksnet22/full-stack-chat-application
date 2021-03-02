const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
});

module.exports = mongoose.model("Conversation", conversationSchema);
