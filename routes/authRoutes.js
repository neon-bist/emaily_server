const app = require("express").Router();
const passport = require("passport");

app.get('/google', passport.authenticate("google", {
  scope: ['profile', 'email']
}))

app.get('/google/callback', passport.authenticate("google"))

module.exports = app;