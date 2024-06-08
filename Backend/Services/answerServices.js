var answers = require("../models/answerModel");
var questions = require("../models/questionModel");
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
