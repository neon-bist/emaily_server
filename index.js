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

//TODO: Remove true if you dont want to serve static file in dev env
if (true || process.env.NODE_ENV === "production") {
  //Serve static files .js/.css
  const path = require("path");
  app.use(express.static(path.resolve(__dirname, "client", "build")));

  //Serve index.html in any route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
