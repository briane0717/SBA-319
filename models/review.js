const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true },
  product: { type: String, required: true },
  user: { type: String, required: true },
  body: { type: String, required: true },
  rating: { type: Number, required: true },
  verified: { type: Boolean, default: false },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
