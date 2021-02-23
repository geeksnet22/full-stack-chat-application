const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.get("/:username", (req, res, next) => {
  User.find({ username: { $regex: req.params.username, $options: "i" } })
    .exec()
    .then((users) =>
      res.status(200).json({
        users: users.map((user) => ({
          _id: user._id,
          username: user.username,
          email: user.email,
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
