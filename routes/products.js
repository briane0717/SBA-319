const express = require("express");
const router = express.Router();
const Products = require("../models/products"); // Product model

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/new", async (req, res) => {
  res.render("products/New");
});
router.post("/new", async (req, res) => {
  const { name, price, quantity, category, rating, isAvailable } = req.body;
  try {
    const newProduct = await Products.create({
      name,
      price,
      quantity,
      category,
      rating,
      isAvailable: isAvailable === "on",
    });
    res.status(201).redirect("/products");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET a single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new product

// DELETE a product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Products.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
