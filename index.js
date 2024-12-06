const express = require("express");
const dotenv = require("dotenv");
const router = express();
const PORT = process.env.PORT || 3000;

router.get("/", (req, res) => {
  res.send("<h1>Welcome Home 🏡</h1>");
});

router.get("/product", async (req, res) => {});

router.use((req, res) => {
  console.log(
    "I am on in this middleware if no other routes have sent a response."
  );
  res.status(404);
  res.json({ error: "Resources not found" });
});

router.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
