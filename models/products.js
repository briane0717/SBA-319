const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: [
      "Electronics",
      "Clothing",
      "Home & Garden",
      "Books",
      "Toys",
      "Sports",
      "Health & Beauty",
      "Automotive",
      "Other",
    ],

    required: true,
  },
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
  isAvailable: { type: Boolean },
});
const Products = mongoose.model("Products", productsSchema);
module.exports = Products;
