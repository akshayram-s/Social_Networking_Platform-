const mongoose = require("mongoose");

const answerschema = new mongoose.Schema(
  {
    answer: { type: String },
    like: [
      {
        type: Number,
        default: 0,
      },
    ],
    userID: { type: String },
    questionid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "questions",
    },
  },
  { timestamps: true }
);

const answermodel = mongoose.model("answer", answerschema);
module.exports = answermodel;
