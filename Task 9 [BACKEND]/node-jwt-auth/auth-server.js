require("dotenv").config();

const users = require("./Data/users");

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

let refreshTokens = [];

app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken === null) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
    if (error) {
      return res.sendStatus(403);
    }

    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken });
  });
});

app.post("/login", async (req, res) => {
  //Authenticate User
  const username = req.body.username;

  const user = users.find((user) => user.username === username);

  if (user === null) {
    res.status(400).send("Can not find user!");
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
      refreshTokens.push(refreshToken);
      res.status(200).json({ accessToken, refreshToken });
    } else {
      res.status(401).send("Not Allowed!");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// New Section
app.post("/user", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { username: req.body.username, password: hashedPassword };
    users.push(user);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
});

app.get("/user", (req, res) => {
  res.json(users);
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

app.listen(5200, () => console.log("Auth Server Started at port 5200"));
