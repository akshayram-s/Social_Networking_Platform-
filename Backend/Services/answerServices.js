var answers = require("../models/answerModel");
var questions = require("../models/questionModel");
var mongoose = require("mongoose");
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(cors());
const answerService = {
  postAns: async (id, ans, userID) => {
    var aDoc = await answers.create({
      answer: ans,
      questionid: id,
      userID: userID,
    });
    var upd = await questions.findByIdAndUpdate(
      id,
      {
        $push: { answer: ans },
      },
      { new: true, useFindAndModify: false }
    );
    return aDoc;
  },
  deleteAns: async (id) => {
    var user = await answers.findByIdAndDelete(id);
    return user;
  },
  updateAns: async (id, ans) => {
    var upd = await answers.updateOne({ questionid: id }, { answer: ans });
    return upd;
  },
  getAns: async (id) => { 
    var upd = await answers.find({ questionid: id });
    return upd;
  },
};
module.exports = answerService;