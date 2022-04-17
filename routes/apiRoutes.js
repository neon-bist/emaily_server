const app = require("express").Router();
const keys = require("../config");
const stripe = require("stripe")(keys.stripeSecretKey);

app.post("/stripe", async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: "usd",
    description: "$5 for 5 credits",
    source: req.body.id,
  });
  console.log(charge);
  res.json(req.user);
});

app.get("/current_user", (req, res) => {
  res.json(req.user);
});
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = app;
