var userServices = require("../Services/userServices");
router.post("/Signup", async (req, res) => {
  var data = await userServices.register(req.body);
  res.send(data);
});

router.post("/Login",  async (req, res) => {
  var { userID, password } = req.body;
  var u = await userServices.login(userID, password);
  if (u != null) {
    res.json(u.userID);
  } else {
    res.send("invalid");
  }
});

router.delete("/Delete/:id", async (req, res) => {
  var del = await userServices.deleteUser(req.params.id);
  if (del != null) {
    res.send("Deleted user");
  } else {
    res.send("Error");
  }
});

router.put("/Profile/:id", async (req, res) => {
  const { about,category } = req.body;
  var upd = await userServices.updateUser(req.params.id, about, category);
  res.send(upd);
});

router.get("/Profile/:userId", async (req, res) => {
  var user = await userServices.getUser(req.params.userId);
  res.send(user);
});
module.exports = router;
