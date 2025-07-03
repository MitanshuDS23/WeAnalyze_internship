const Ticket = require("../models/Ticket");

exports.createTicket = async (req, res) => {
  const { subject, description } = req.body;
  try {
    const ticket = await Ticket.create({
      subject,
      description,
      user: req.userId,
    });
    res.status(201).json(ticket);
  } catch (err) {
    console.error("Ticket creation error:", err);
    res.status(500).json({ message: "Server error during ticket creation" });
  }
};

exports.getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.userId }).sort({
      createdAt: -1,
    });
    res.json(tickets);
  } catch (err) {
    console.error("Fetching tickets error:", err);
    res.status(500).json({ message: "Server error fetching tickets" });
  }
};
