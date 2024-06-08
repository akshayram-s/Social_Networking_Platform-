var users = require("../models/userModel");
var mongoose = require("mongoose");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(jsonParser);
const userService = {
  register: async (user) => {
    var uDoc = await users.create(user);
    
    return uDoc;
  },
  login: async (uid, pwd) => {
    var user = await users.findOne({ userID: uid, password: pwd });
    return user;
    
  },
  deleteUser: async (id) => {
    var user = await users.findByIdAndDelete(id);
    return user;
  },
  getUser: async (id) => {
    var user = await users.findOne({ userID: id });
    return user;
  },
  updateUser: async (id, about,cat) => {
    var user = await users.updateOne({ userID: id },  { about: about});
    return user;
    mongoose.connection.close();
  },
};
module.exports = userService;
