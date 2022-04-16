const app = require("express").Router();
const passport = require("passport");

app.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

app.get("/google/callback", passport.authenticate("google"));

app.get("/current_user", (req, res) => {
  res.json(req.user);
});
app.get("/logout", (req, res) => {
  req.logout();
  res.send("Logged Out!");
});

module.exports = app;
