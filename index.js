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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
