const express = require("express");
const router = express.Router();
const { Post } = require("../models");

// POST route to create a new post
router.post("/", async (req, res) => {
  try {
    const post = req.body;
    const newPost = await Post.create(post);
    res.json(newPost);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the post." });
  }
});

// GET route to retrieve all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving posts." });
  }
});

module.exports = router;
