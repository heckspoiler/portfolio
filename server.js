require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;
const prompt = require("./prompt");
const apiKey = process.env.API_KEY;
const email = process.env.MAIL;
const password = process.env.MAIL_PW;

app.use(cors());

app.use(express.json());
console.log(prompt);

let transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: email,
    pass: password,
  },
});

app.get("/ask", async (req, res) => {
  const standardPrompt = prompt;
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

app.post("/form", async (req, res) => {
  console.log("Body Body BodY", req.body);

  let mailOptions = {
    from: email,
    to: email,
    subject: `New message from your portfolio from ${req.body.name}`,
    text: `Name: ${req.body.name}
           Email: ${req.body.email}
           Subject: ${req.body.select}
           Message: ${req.body.message}
           Checkbox: ${req.body.checkbox}`,
  };

  let mailRedirect = {
    from: email,
    to: req.body.email,
    subject: `Thank you for your message!`,
    text: `Thank you for your message! I will get back to you as soon as possible. 
Best regards, Carlo
             

Your message:
             ${req.body.message}

Your email:
              ${req.body.email}
             `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Error, email not sent" });
    } else {
      console.log("Email sent: " + info.response);
      if (req.body.checkbox === true) {
        transporter.sendMail(mailRedirect, (error, info) => {
          if (error) {
            console.log(error);
            res.status(500).json({ message: "Error, email not sent" });
          } else {
            console.log("Email sent: " + info.response);
            res.json({ message: "Success, emails sent!" });
          }
        });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log("everything is working fine just like it should be");
});
