const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(404).send(error);
  }
});
router.get("/seed", async (req, res) => {
  try {
    const products = [
      new Product({
        name: "Shirt",
        price: 24.99,
        quantity: 100,
        description: "Graphic Tshirt",
        category: "Fruits",
        image: "https://example.com/apple.jpg",
        rating: 4.5,
        isAvailable: true,
      }),
      // Add more products here...
    ];

    const createdProducts = await Product.insertMany(products);
    res.status(201).json(createdProducts);
  } catch (error) {
    res.status(404).send(error);
  }
});
