const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");

//DB connection
mongoose.connect(keys.mongodbURI);

require("./services/passport");

app.use('/auth', require("./routes/authRoutes"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});