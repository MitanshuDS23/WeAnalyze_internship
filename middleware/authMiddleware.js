const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "b74e6f91e7a1a5a2b9c4e4c2d0f3e0f4f2d9b7c6a1a0c3b2e5d6f1e7a8b3c5";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
};

module.exports = authMiddleware;
