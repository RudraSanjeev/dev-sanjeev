const router = require("express").Router();
const User = require("../models/model.user.js");
// register
router.post("/register", async (req, res) => {
  const newUser = new User(req.body);

  const savedUser = await newUser.save();

  res.status(201).json(savedUser);
});

// login
router.post("/login", async (req, res) => {
  try {
    const uName = req.body.username;
    const uPass = req.body.password;

    const user = await User.findOne({ username: uName });
    if (!user) {
      return res.status(401).json("Username or password is incorrect!");
    }
    const { username, password } = user._doc;
    // if (uName !== username) return res.status(401).json("username incorrect !");
    if (uPass !== password) return res.status(401).json("password incorrect !");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json("Internal server Error... ");
  }
});

module.exports = router;
