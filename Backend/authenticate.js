const authenticate = async (req, res, next) => {
  console.log(req.headers);
  let token = req.headers.authorization;
  if (token) {
    // token = token.split(" ")[1];
    [u, p] = token.split(":");
    user = await UserService.login(u, p);
    console.log(user);
    if (user.password == p) next();
    else res.send("invalid");
  } else res.send("no token");
};

module.exports = authenticate;
