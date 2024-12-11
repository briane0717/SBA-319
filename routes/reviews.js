const express = require("express");
const router = express.Router();
const Reviews = require("../models/reviews"); // Product model

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Reviews.find({});
    res.render("reviews", { reviews: reviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Show form to create a new review
router.get("/new", async (req, res) => {
  res.render("reviews/New");
});

router.post("/new", async (req, res) => {
  const { title, product, user, body, rating, verified } = req.body;

  if (!title || !product || !user || !body) {
    return res
      .status(400)
      .json({ error: "Title, product, user, and body are required fields." });
  }

  try {
    const newReview = await Reviews.create({
      title,
      product,
      user,
      body,
      rating: rating || 5,
      verified: verified === "on",
    });
    res.status(201).redirect("/reviews");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Show form to edit an existing review
router.get("/edit/:id", async (req, res) => {
  try {
    const reviews = await Reviews.findById(req.params.id);
    if (!reviews) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.render("reviews/Edit", { reviews: reviews, id: reviews._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT to update a review
router.put("/:id", async (req, res) => {
  if (req.body.verified === "on") {
    req.body.verified = true;
  } else {
    req.body.verified = false;
  }

  try {
    const updatedReviews = await Reviews.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log(updatedReviews);
    res.redirect("/reviews");
  } catch (err) {
    res.send(err).status(400);
  }
});

// DELETE a review
router.delete("/:id", async (req, res) => {
  try {
    const deletedReviews = await Reviews.findByIdAndDelete(req.params.id);
    if (!deletedReviews) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).redirect("/reviews");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
