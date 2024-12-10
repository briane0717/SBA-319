const express = require("express");
const dotenv = require("dotenv");
const db = require("./db/conn");
const jsxViewEngine = require("jsx-view-engine");
const productsRoute = require("./routes/products");
const reviewsRoute = require("./routes/reviews");
const usersRoute = require("./routes/users");

dotenv.config();

const app = express(); // Main app instance
const PORT = process.env.PORT || 3000;

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// MIDDLEWARE
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.static("public"));
app.use((req, res, next) => {
  console.log("Middleware: I run for all routes");
  next();
});

app.use((req, res, next) => {
  const time = new Date();
  console.log(
    `-----
        ${time.toLocaleDateString()}: Received a ${req.method} request to ${
      req.url
    }.`
  );
  next();
});
app.get("/", (req, res) => res.send("<h1>Welcome Home 🏡</h1>"));
app.use("/products", productsRoute);
// app.use("/api/reviews", reviewsRoute);
app.use("/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
