const app = require("express").Router();
const keys = require("../config");
const stripe = require("stripe")(keys.stripeSecretKey);

const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

app.post("/stripe", requireLogin, async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: "usd",
    description: "$5 for 5 credits",
    source: req.body.id,
  });
  req.user.credits += 5;
  const user = await req.user.save();
  res.json(user);
});

app.get("/current_user", (req, res) => {
  res.json(req.user);
});
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = app;
