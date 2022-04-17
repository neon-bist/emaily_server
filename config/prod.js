module.exports = {
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // mongodbURI: "mongodb://localhost:27017",
  mongodbURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};
