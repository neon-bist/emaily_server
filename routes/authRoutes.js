const app = require("express").Router();
const passport = require("passport");

app.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

app.get("/google/callback", passport.authenticate("google"), (req, res) =>
  res.redirect("/surveys")
);

module.exports = app;
