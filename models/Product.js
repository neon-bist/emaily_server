const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  product_code: { type: String, required: true, unique: true },
  name: String,
  price: Number,
  stock: Number,
  sold: { type: Number, default: 0 },
  createdBy: mongoose.Types.ObjectId,
});

module.exports = mongoose.model("products", ProductSchema);
