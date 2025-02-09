const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protected Route
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to the dashboard!" });
});

module.exports = router;
