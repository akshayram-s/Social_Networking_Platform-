var questionServices = require("../Services/questionServices");
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var router = express.Router();
router.use(jsonParser);
app.use(cors());

router.post("/question/:userID", async (req, res) => {
  const { category, question } = req.body;
  const ques = await questionServices.post(
    category,
    question,
    req.params.userID
  );
  res.send(ques);
});

router.delete("/question/:id", async (req, res) => {
  const del = await questionServices.deleteQues(req.params.id);
  res.send(del);
});

router.put("/question/:id", async (req, res) => {
  const { question } = req.body;
  const upd = await questionServices.updateQues(req.params.id, question);
  res.send(upd);
});

router.get("/Home", async (req, res) => {
  const getQ = await questionServices.getQues();
  res.send(getQ);
});

router.get("/search/:ques",async(req,res)=>{
  const {ques}=req.params;
  console.log("question="+ques);
  const search=await questionServices.searchQues(ques);
  console.log("Results=",search);
  res.json(search);
})
module.exports = router;
