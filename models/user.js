const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: false },
  isActive: { type: Boolean },
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
