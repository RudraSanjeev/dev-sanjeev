const express = require("express");

const app = express();
let users = [];
app.use(express.json());
app.post("/api/users", (req, res) => {
  const userData = {
    id: req.body.id,
    name: req.body.name,
  };
  if (!userData.name || !userData.id) {
    res.status(400).json({ err: "Bad request !" });
  } else {
    users.push(userData);
    res.status(201).json(users);
  }
});

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  // console.log(userId);
  const user = users.find((user) => {
    return user.id === JSON.parse(userId);
  });
  if (user) {
    users = users.filter((user) => {
      return user.id !== userId;
    });
    res.status(200).json("user deleted successfully !");
  } else {
    res.status(404).json("user not found !");
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
