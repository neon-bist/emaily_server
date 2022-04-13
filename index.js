const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy())

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}...`);
});