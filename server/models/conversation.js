const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  participant1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  participant2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Conversation", conversationSchema);
