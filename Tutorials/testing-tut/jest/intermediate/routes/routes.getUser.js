const router = require("express").Router();
const User = require("../models/model.user.js");
const mongoose = require("mongoose");

// get method to find only selected field
// 1st method
// router.get("/findsome/:id", async (req, res) => {
//   try {
//     const { username, email, password } = await User.findById(req.params.id);
//     res.status(200).json({ username, email, password });
//   } catch (err) {
//     res.status(500).json("Internal server error: " + err);
//   }
// });

// 2nd method
router.get("/findsome/:id", async (req, res) => {
  try {
    const getUser = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(req.params.id),
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

    res.status(200).json(getUser[0]);
  } catch (err) {
    res.status(500).json("Internal server error: " + err);
  }
});

module.exports = router;
