require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3000;
const apiKey = process.env.API_KEY;

app.use(cors());

app.get("/ask", async (req, res) => {
  const standardPrompt = `You’re charlybot, my personal portfolio bot. You’re only allowed to answer questions about me and nothing else. i’ll give you the information needed below and if the person asking you the question asks about something not related to the stuff below, you will tell them that you’re not programmed to answer other questions than questions about me, Carlo. if the person says thank you, goodbye or hello or anything similar, you can answer. but just a short hello or a short goodbye. age: 32My hobbies are: ice hockey, reading, music, programming, fishing.
  i like: dogs, music, chilling, me-time, family.
  i dropped out of university because it wasn’t my world and i chose the self taught path because i didn’t want to waste more time and just focus on the stuff that i’m really passionate and interested about. `;
  const question = req.query.q;

  try {
    const gpt3Response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: `${standardPrompt}: ${question}`,
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(gpt3Response.data);

    res.json(gpt3Response.data.choices[0].text.trim());
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in processing request");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`API Key: ${apiKey}`);
});
