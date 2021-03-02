const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../middleware/check-auth");
const conversation = require("../models/conversation");

const Conversation = require("../models/conversation");

router.post("/", checkAuth, (req, res, next) => {
  const participants = req.body.participants.map((participant) =>
    mongoose.Types.ObjectId(participant)
  );
  Conversation.findOne({
    participants: { $all: participants, $size: participants.length },
  }).then((doc) => {
    if (doc) {
      return res.status(409).json({
        message: "Conversation already exists",
        createConversation: {
          conversationId: doc._id,
        },
      });
    }
    const conversation = new Conversation({
      _id: new mongoose.Types.ObjectId(),
      participants: participants,
      lastMessage: null,
    });
    conversation
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Conversation created",
          createConversation: {
            conversationId: result._id,
          },
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
});

router.get("/:userId", checkAuth, (req, res, next) => {
  Conversation.find({
    participants: mongoose.Types.ObjectId(req.params.userId),
  })
    .select("_id participants")
    .populate("participants")
    .populate("lastMessage")
    .exec()
    .then((conversations) =>
      res.status(200).json({
        conversations: conversations.map((conversation) => ({
          _id: conversation._id,
          participants: conversation.participants.map((participant) => ({
            _id: participant._id,
            username: participant.username,
          })),
          lastMessage: conversation.lastMessage,
        })),
      })
    )
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});

module.exports = router;
