const app = require("express").Router();
const passport = require("passport");

app.get("/google", (req, res, next) => {
  const { redirectTo } = req.query;
  const state = redirectTo
    ? Buffer.from(JSON.stringify({ redirectTo })).toString("base64")
    : undefined;

  console.log(redirectTo, state);
  return passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
    state,
  })(req, res, next);
});

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    try {
      const { state } = req.query;
      const { redirectTo } = JSON.parse(
        Buffer.from(state, "base64").toString()
      );
      if (typeof redirectTo === "string" && redirectTo.startsWith("/")) {
        return res.redirect(redirectTo);
      }
    } catch {
      // just redirect normally below
    }
    res.redirect("/surveys");
  }
);

module.exports = app;
