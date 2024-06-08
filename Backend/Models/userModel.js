const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    userID: { type: String, required: true, unique: true },
    email: { type: String },
    password: { type: String },
    about: { type: String, default: "" },
    category: [{ type: String, default: "" }],
  },
  { timestamps: true }
);
const usersmodel = mongoose.model("users", userSchema);
module.exports = usersmodel;
