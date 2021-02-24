const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../middleware/check-auth");

const Message = require("../models/message");

router.post("/", checkAuth, (req, res, next) => {
  const { conversationId, content, author } = req.body;
  const message = new Message({
    _id: new mongoose.Types.ObjectId(),
    author: mongoose.Types.ObjectId(author),
    conversation: mongoose.Types.ObjectId(conversationId),
    content: content,
    timestamp: Date.now(),
  });
  message
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Create message successful",
        createMessage: {
          _id: result._id,
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

router.get("/:conversationId", checkAuth, (req, res, next) => {
  Message.find({
    conversation: mongoose.Types.ObjectId(req.params.conversationId),
  })
    .populate("author")
    .exec()
    .then((docs) => {
      res.status(200).json({
        messages: docs
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((doc) => ({
            _id: doc.id,
            sender: doc.author,
            content: doc.content,
            timestamp: doc.timestamp,
          })),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;