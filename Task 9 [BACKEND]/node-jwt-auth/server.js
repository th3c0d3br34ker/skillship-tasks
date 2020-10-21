require("dotenv").config();

const posts = require("./Data/posts");

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.get("/posts", authenticateToken, (req, res) => {
  console.log(req.user);
  res.json(posts.filter((post) => post.username === req.user.name));
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

app.listen(5201, () => console.log("Server Started at port 5201"));
