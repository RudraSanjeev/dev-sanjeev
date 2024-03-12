const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

// middleware
app.use(express.json());

const users = [
  {
    id: "1",
    username: "john",
    password: "John0908",
    isAdmin: true,
  },
  {
    id: "2",
    username: "jane",
    password: "Jane0908",
    isAdmin: false,
  },
];
const refreshTokens = [];
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.GENERATE_SEC_KEY,
    { expiresIn: "30m" }
  );
};
const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.REFRESH_SEC_KEY,
    { expiresIn: "30m" }
  );
};

// routes
app.post("/api/auth/login", (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find((u) => {
      return u.username === username && u.password === password;
    });
    if (user) {
      const accessToken = generateToken(user);
      const refreshToken = generateRefreshToken(user);
      refreshTokens.push(refreshToken);
      res.status(200).json({ ...user, accessToken, refreshToken });
    } else {
      res.status(400).json("username or password is wrong !");
    }
  } catch (err) {
    res.status(500).json("Internal server error...");
  }
});

// refresh token
app.post("/api/auth/refresh", (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken) return res.status(403).json("You are not authenticated !");
  if (!refreshTokens.includes(refreshToken))
    return res.status(403).json("You are not authenticated !");

  jwt.verify(refreshToken, process.env.REFRESH_SEC_KEY, (err, user) => {
    if (err) {
      return res.status(403).json("invalid token !");
    }
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    const newAccessToken = generateToken(user);
    const newRefreshToken = generateRefreshToken(user);
    return res
      .status(201)
      .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  });
});

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "jwtsec", (err, user) => {
      if (err) {
        return res.status(403).json("invalid token !");
      }
      req.user = user;
      next();
    });
  } else {
    req.status(401).json("You are not authenticated !");
  }
};

app.delete("/api/users/:userId", verifyToken, (req, res) => {
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    res.status(200).json("user has been deleted successfully...");
  } else {
    return res.status(403).json("You are not allowed to delete this user");
  }
});

app.listen(8000, () => {
  console.log("Backend is running on 8000");
});
