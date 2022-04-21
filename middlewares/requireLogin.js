module.exports = (req, res, next) => {
  if (!req.user) {
    return res.redirect("/auth/google?redirectTo=" + req.baseUrl + req.path);
    // return res.status(401).send("Please login first!");
  }
  next();
};
