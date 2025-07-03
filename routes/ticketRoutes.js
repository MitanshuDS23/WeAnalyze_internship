const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createTicket,
  getUserTickets,
} = require("../controllers/ticketController");

router.post("/", authMiddleware, createTicket);
router.get("/", authMiddleware, getUserTickets);

module.exports = router;
