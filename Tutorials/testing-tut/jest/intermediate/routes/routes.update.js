const router = require("express").Router();
const User = require("../models/model.user.js");
const mongoose = require("mongoose");
// update any field (one or more using patch)
// 1st method
router.patch("/anyfield/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json("Internal server error: " + err);
  }
});

// secnod method
router.put("/anyfield/:id", async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);

    !getUser && res.status(404).json("user not found !");

    const updatedData = req.body;
    for (const key in updatedData) {
      getUser[key] = updatedData[key];
    }
    const newUpdatedData = await getUser.save();
    res.status(200).json(newUpdatedData);
  } catch (err) {
    res.status.json("something went wrong... " + err);
  }
});

// get method to find only selected field
// 1st method
router.get("/findsome/:id", async (req, res) => {
  try {
    const { username, email, password } = await User.findById(req.params.id);
    res.status(200).json({ username, email, password });
  } catch (err) {
    res.status(500).json("Internal server error: " + err);
  }
});

// 2nd method
router.get("/findsome/:id", async (req, res) => {
  try {
    const getUser = await User.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.params.id),
        },
      },
      {
        $project: {
          username: 1,
          email: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json(getUser);
  } catch (err) {
    res.status(500).json("Internal server error: " + err);
  }
});

router.get("/findsome/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const getUser = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId), // Use new keyword
        },
      },
      {
        $project: {
          username: 1,
          email: 1,
          _id: 0,
        },
      },
    ]);

    if (getUser.length === 0) {
      return res.status(404).json("User not found");
    }

    res.status(200).json(getUser[0]);
  } catch (err) {
    res.status(500).json("Internal server error: " + err);
  }
});

module.exports = router;
