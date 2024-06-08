var answerServices = require("../Services/answerServices");
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var router = express.Router();
router.use(jsonParser);
app.use(cors());

router.post("/answer/:userID/:id", async (req, res) => {
  const { answer } = req.body;
  const ques = await answerServices.postAns(
    req.params.id,
    answer,
    req.params.userID
  );
  res.send(ques);
});

router.delete("/answer/:id", async (req, res) => {
  const del = await answerServices.deleteAns(req.params.id);
  res.send(del);
});

router.put("/answer/:id", async (req, res) => {
  const { answer } = req.body;
  const upd = await answerServices.updateAns(req.params.id, answer);
  res.send(upd);
});

router.get("/answer/:id", async (req, res) => {
  const getans = await answerServices.getAns(req.params.id);
  res.send(getans);
});

module.exports = router;
