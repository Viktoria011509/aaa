const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, "userGames.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function readUserGames() {
  try {
    if (!fs.existsSync(DATA_FILE)) return {};
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.error("Read error:", err);
    return {};
  }
}

function writeUserGames(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Write error:", err);
  }
}

// API routes
app.get("/api/user-games", (req, res) => {
  res.json(readUserGames());
});

app.post("/api/user-games", (req, res) => {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({ error: "Invalid data" });
  }
  writeUserGames(req.body);
  res.json({ success: true });
});

// Start server (Render compatible)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
