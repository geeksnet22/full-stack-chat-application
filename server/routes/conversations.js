const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../middleware/check-auth");
const conversation = require("../models/conversation");

const Conversation = require("../models/conversation");

router.post("/", checkAuth, (req, res, next) => {
  const participant1 = mongoose.Types.ObjectId(req.body.participant1);
  const participant2 = mongoose.Types.ObjectId(req.body.participant2);
  Conversation.findOne({
    $or: [
      { participant1: participant1, participant2: participant2 },
      { participant1: participant2, participant2: participant1 },
    ],
  }).then((doc) => {
    if (doc) {
      return res.status(202).json({
        conversationId: doc._id,
      });
    }
    const conversation = new Conversation({
      _id: new mongoose.Types.ObjectId(),
      participant1: participant1,
      participant2: participant2,
    });
    conversation
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Conversation created",
          createConversation: {
            conversationId: result._id,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  });
});

router.get("/:userId", checkAuth, (req, res, next) => {
  const userId = req.params.userId;
  Conversation.find({
    $or: [
      { participant1: mongoose.Types.ObjectId(userId) },
      { participant2: mongoose.Types.ObjectId(userId) },
    ],
  })
    .populate("participant1")
    .populate("participant2")
    .exec()
    .then((docs) =>
      res.status(200).json({
        conversations: docs.map((doc) => ({
          _id: doc._id,
          user:
            doc.participant1 === mongoose.Types.ObjectId(userId)
              ? doc.participant2
              : doc.participant1,
        })),
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
