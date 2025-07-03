const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String, // displayed as name
  email: { type: String, unique: true },
  password: String, // hashed password
  contact: { type: String, default: "Not provided" },
  department: { type: String, default: "" },
});

module.exports = mongoose.model("User", userSchema);
