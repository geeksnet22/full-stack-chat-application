const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.post("/register", (req, res, next) => {
  if (req.body.password.length <= 6) {
    return res.status(403).json({
      message: "Password must be more than 6 digits",
    });
  }
  User.findOne({
    $or: [{ username: req.body.username }, { email: req.body.email }],
  })
    .exec()
    .then((user) => {
      if (user) {
        return res.status(409).json({
          message:
            user.username === req.body.username && user.email === req.body.email
              ? "Username and email already exist"
              : user.username === req.body.username
              ? "Username already exists"
              : "Email already exists",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              username: req.body.username,
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                const token = jwt.sign({ userId: user._id }, "SECRET_KEY", {
                  expiresIn: "7d",
                });
                res.cookie("token", token, { httpOnly: true });
                res.status(201).json({
                  message: "User created",
                  user: {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                  },
                  token: token,
                });
              })
              .catch((error) => {
                res.status(500).json({
                  error: error,
                });
              });
          }
        });
      }
    });
});

router.post("/login", (req, res, next) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign({ userId: user._id }, "SECRET_KEY", {
            expiresIn: "7d",
          });
          res.cookie("token", token, { httpOnly: true });
          return res.status(200).json({
            message: "Auth successful",
            user: {
              _id: user._id,
              username: user.username,
              email: user.email,
            },
            token: token,
          });
        }
        res.status(401).json({
          message: "Auth failed",
        });
      });
    });
});

router.get("/", (req, res, next) => {
  User.find({ username: { $regex: req.query.username, $options: "i" } })
    .select("_id username")
    .exec()
    .then((users) =>
      res.status(200).json({
        users: users,
      })
    )
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
