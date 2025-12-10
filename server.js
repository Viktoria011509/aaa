const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "userGames.json");

app.use(express.json());
app.use(express.static(__dirname));

function readUserGames() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return {};
    }
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    if (!raw) {
      return {};
    }
    const data = JSON.parse(raw);
    if (data && typeof data === "object" && !Array.isArray(data)) {
      return data;
    }
    return {};
  } catch (e) {
    return {};
  }
}

function writeUserGames(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch (e) {}
}

app.get("/api/user-games", function (req, res) {
  const games = readUserGames();
  res.json(games);
});

app.post("/api/user-games", function (req, res) {
  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ error: "Invalid data" });
  }
  writeUserGames(body);
  res.json(body);
});

app.listen(PORT, function () {
  console.log("Barakhagh backend listening on port " + PORT);
});
