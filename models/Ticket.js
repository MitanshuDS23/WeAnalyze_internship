const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  subject: String,
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, default: "Open" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ticket", ticketSchema);
