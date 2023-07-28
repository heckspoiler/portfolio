const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;
const apiKey = process.env.API_KEY;

console.log(apiKey);
app.get("/", (req, res) => {
  res.json({ message: "Hello World!", apiKey: apiKey });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`API Key: ${apiKey}`);
});
