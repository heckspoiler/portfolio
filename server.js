require("dotenv").config();

const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
const apiKey = process.env.API_KEY;

app.get("/ask", async (req, res) => {
  const question = req.query.q;

  const gpt3Response = await axios.post(
    "https://api.openai.com/v1/engines/davinci-codex/completions",
    {
      prompt: question,
      max_tokens: 500,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  res.json(gpt3Response.data.choices[0].text.trim());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`API Key: ${apiKey}`);
});
