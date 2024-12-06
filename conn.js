const mongoose = require("mongoose");
const dontenv = require("dotenv");
dotenv.config();

const mongoURI = process.env.ATLAS_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI);
mongoose.connection.once("open", () => {
  console.log("We got Mongos 🥭🥭🥭");
});

module.exports = db;
