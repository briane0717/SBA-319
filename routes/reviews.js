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
  console.log(req.body);
  const { title, product, user, body, rating, verified } = req.body;

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
    const review = await Reviews.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.render("reviews/Edit", { review: review }); // Passing 'review' to the Edit component
  } catch (error) {
    res.status(400).json({ error: error.message });
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
// Delete a review
router.delete("/:id", async (req, res) => {
  try {
    const review = await Reviews.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.redirect("/reviews"); // Redirect to the reviews index after deletion
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
