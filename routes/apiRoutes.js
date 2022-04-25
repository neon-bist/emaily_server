const app = require("express").Router();
const keys = require("../config");

const requireLogin = require("../middlewares/requireLogin");

const Product = require("../models/Product");

app.get("/current_user", (req, res) => {
  res.json(req.user);
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.get("/products", requireLogin, async (req, res) => {
  const products = await Product.find({ createdBy: req.user.id });
  res.json(products);
});

app
  .route("/product/:pid")
  .get(requireLogin, async (req, res) => {
    const product = await Product.find({
      createdBy: req.user.id,
      product_code: req.params.pid,
    });

    res.json(product);
  })
  .post(requireLogin, async (req, res) => {
    const { product_code, name, price, stock } = req.body;
    const product = await new Product({
      createdBy: req.user.id,
      product_code,
      name,
      price,
      stock,
    }).save();

    res.status(201).json(product);
  });

app.post("/product", requireLogin, async (req, res) => {
  const { product_code, name, price, stock } = req.body;
  const product = await new Product({
    createdBy: req.user.id,
    product_code,
    name,
    price,
    stock,
  }).save();

  res.status(201).json(product);
});
module.exports = app;
