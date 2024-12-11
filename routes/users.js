const express = require("express");
const router = express.Router();
const Users = require("../models/users"); // Users model

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await Users.find({});
    res.render("users", { users: users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Show form to create a new user
router.get("/new", (req, res) => {
  res.render("users/New");
});

router.post("/new", async (req, res) => {
  const { userName, email, age, isActive } = req.body;

  try {
    const newUser = await Users.create({
      userName,
      email,
      age,
      isActive: isActive === "on",
    });
    res.status(201).redirect("/users");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Show form to edit an existing user
router.get("/edit/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.render("users/Edit", { user: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT to update a user
router.put("/:id", async (req, res) => {
  if (req.body.isActive === "on") {
    req.body.isActive = true;
  } else {
    req.body.isActive = false;
  }

  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(updatedUser);
    res.redirect("/users");
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.redirect("/users");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
