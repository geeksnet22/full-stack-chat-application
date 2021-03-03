const createError = require("http-errors");
const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");

const userRouter = require("./routes/users");
const messageRouter = require("./routes/messages");
const conversationRouter = require("./routes/conversations");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const { json, urlencoded } = express;

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/users", userRouter);
app.use("/messages", messageRouter);
app.use("/conversations", conversationRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
