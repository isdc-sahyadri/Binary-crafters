const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

require("dotenv").config();

const router = express.Router();

// User Registration
router.post("/signup", async (req, res) => {
    try {
      console.log("🔹 Received signup request:", req.body); // Debugging log
  
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        console.log("⚠️ Missing fields:", { name, email, password });
        return res.status(400).json({ message: "All fields are required" });
      }
  
      let user = await User.findOne({ email });
      if (user) {
        console.log("⚠️ User already exists:", email);
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("✅ Password hashed successfully");
  
      user = new User({ name, email, password: hashedPassword });
      await user.save();
      console.log("✅ User saved successfully:", user);
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("❌ Signup Error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });

// User Login
router.post("/signin", async (req, res) => {
    try {
      console.log("🔹 Received signin request:", req.body);
  
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      let user = await User.findOne({ email });
      if (!user) {
        console.log("⚠️ User not found:", email);
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("⚠️ Incorrect password for:", email);
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      console.log("✅ JWT token generated:", token);
  
      res.json({ message: "Login successful", token });
  
    } catch (error) {
      console.error("❌ Signin Error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });

// ✅ FIX: Export the router properly
module.exports = router;
