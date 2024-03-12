const router = require("express").Router();
const Post = require("../models/model.post.js");
const User = require("../models/model.user.js");
const mongoose = require("mongoose");

router.post("/add", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json("Internal server error..." + err);
  }
});

// find all post related to specific user

router.get("/find/:id", async (req, res) => {
  const authorId = new mongoose.Types.ObjectId(req.params.id);
  try {
    const allPost = await Post.find({ author: authorId });

    !allPost && res.status(404).json("post not found!");

    if (allPost.length == 0) {
      return res.status(404).json("no post related to the author !");
    }

    res.status(200).json(allPost);
  } catch (err) {
    res.status(503).json("Internal server error: " + err);
  }
});

// Route to retrieve posts with author information populated
router.get("/userPosts", async (req, res) => {
  try {
    const posts = await Post.find().populate("author");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// create a view in which username and array of all the post of particular user should have.
router.get("/userPosts/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const result = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId), // Convert userId to ObjectId
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "author",
          as: "posts",
        },
      },
      {
        $project: {
          _id: 0, // Exclude _id field
          username: 1,
          posts: "$posts", // Include posts array
        },
      },
    ]);

    if (result.length === 0) {
      return res.status(404).json("User not found.");
    }

    res.status(200).json(result[0]); // Assuming there's only one user with the provided ID
  } catch (err) {
    res.status(500).json("Internal server error: " + err);
  }
});

module.exports = router;
