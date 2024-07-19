import express from "express";
import pool from "../../db";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE username = ?", [
      req.body.username,
    ]);
    if (rows.length > 0) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
