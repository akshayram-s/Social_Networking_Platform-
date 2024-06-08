var mongoose = require("mongoose");
var express = require("express");
var app = express();
var cors = require("cors");
const user = require("./routes/user-router");
const question = require("./routes/question-router");
const answer = require("./routes/answer-router");
app.use(cors());
app.use(user);
app.use(question);
app.use(answer);
var server = app.listen(5000, function () {
  console.log("Listening on port 5000...");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
