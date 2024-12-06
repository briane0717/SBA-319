const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  product: { type: String, required: true },
  user: { type: String, required: true },
  body: { type: String, required: true },
  rating: { type: Number, required: true },
  verified: { type: Boolean, default: false },
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Fruit;
