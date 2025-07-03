const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI =
  "mongodb+srv://nvedant382:MLPqazNKOwsx@cluster0.ssamt.mongodb.net/wanderlust?retryWrites=true&w=majority&appName=Cluster0";
const PORT = 5000;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/profile", profileRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
