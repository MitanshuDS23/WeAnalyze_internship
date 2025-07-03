const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select(
      "username email contact department"
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error("Get profile error:", err);
    res.status(500).json({ message: "Server error fetching profile" });
  }
};

exports.updateProfile = async (req, res) => {
  const { contact, department } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { contact, department },
      { new: true, runValidators: true }
    ).select("username email contact department");
    res.json(updatedUser);
  } catch (err) {
    console.error("Update profile error:", err);
    res.status(500).json({ message: "Server error updating profile" });
  }
};
