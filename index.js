const express = require("express");
const app = express();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    }, (accessToken, refreshToken, profile, done) => {
        console.log(accessToken);
        console.log(profile);
    })
)

app.get('/auth/google', passport.authenticate("google", {
    scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate("google"))
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});