const mongoose = require("mongoose");
const questionschema = new mongoose.Schema(
  {
    question: { type: String },
    category: { type: String },
    answer: [{ type: String, ref: "answers" }],
    userID: { type: String },
  },
  { timestamps: true }
);

const questionmodel = mongoose.model("questions", questionschema);
module.exports = questionmodel;
