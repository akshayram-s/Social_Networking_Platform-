var questions = require("../models/questionModel");
var mongoose = require("mongoose");
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(jsonParser);
app.use(cors());
const questionService = {
  post: async (cat, ques, id) => {
    var qDoc = await questions.create({
      category: cat,
      question: ques,
      userID: id,
    });
    return qDoc;
  },
  deleteQues: async (id) => {
    var user = await questions.findByIdAndDelete(id);
    var delAns = await answers.deleteMany({ questionid: id });
    return user;
  },
  updateQues: async (id, ques) => {
    var upd = await questions.findByIdAndUpdate(id, { question: ques });
    return upd;
  },
  getQues: async () => {
    var upd = await questions.find({ });
    return upd;
  },
  searchQues: async(search)=>{
    var result= await questions.find({question:{"$regex":search,"$options":"i"}})
    return result;
  }
};
module.exports = questionService;
