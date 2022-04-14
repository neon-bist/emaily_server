const express = require("express");
const app = express();
require("./services/passport");

app.use('/auth', require("./routes/authRoutes"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});