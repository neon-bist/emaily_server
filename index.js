const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config");
const passport = require("passport");
const cookieSession = require("cookie-session");

//DB connection
mongoose.connect(keys.mongodbURI);

require("./services/passport");

//cookie setup
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./routes/authRoutes"));
app.get("/api/current_user", (req, res) => {
  res.json(req.user);
});
app.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
