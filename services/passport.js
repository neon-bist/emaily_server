const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config");

const User = require("../models/User");
passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ googleId: profile.id });
      try {
        if (!user)
          user = await new User({
            googleId: profile.id,
            displayName: profile.displayName,
          }).save();
        done(null, user);
      } catch (e) {
        done(e, null);
      }
    }
  )
);
