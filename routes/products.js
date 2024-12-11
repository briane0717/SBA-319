const express = require("express");
const router = express.Router();
const Products = require("../models/products"); // Product model

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Products.find({});
    res.render("products", { products: JSON.stringify(products) });
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
router.get("/edit", async (req, res) => {
  res.render("products/Edit");
});
router.put("/:id", async (req, res) => {
  if (req.body.isAvailable === "on") {
    // if checked, req.body.isAvailable is set to 'on'
    req.body.isAvailable = true;
  } else {
    // if not checked, req.body.isAvailable is undefined
    req.body.isAvailable = false;
  }

  try {
    const updatedProducts = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log(updatedProducts);
    res.redirect("/products");
  } catch (err) {
    res.send(err).status(400);
  }
});

// GET a single product
router.get("/edit/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.render("products/Edit", { products: product, id: product._id });
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
    res.status(200).redirect("/products");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
