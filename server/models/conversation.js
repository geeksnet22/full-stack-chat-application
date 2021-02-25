const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Conversation", conversationSchema);
