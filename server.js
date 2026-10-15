const express = require("express");
const fs = require("node:fs/promises");
const path = require("node:path");

const app = express();
const port = process.env.PORT || 5000;
const dataDirectory = path.join(__dirname, ".data");
const resultsFile = path.join(dataDirectory, "quiz-results.json");

const quizTopics = new Set([
  "motherboard",
  "cpu",
  "ram",
  "psu",
  "keyboard",
  "mouse",
  "microphone",
  "monitor",
  "speakers",
  "printer",
  "hdd",
  "ssd",
  "usb",
]);

app.use(express.json());

async function readQuizResults() {
  try {
    const savedResults = await fs.readFile(resultsFile, "utf8");
    const results = JSON.parse(savedResults);

    if (!results || typeof results !== "object" || Array.isArray(results)) {
      throw new Error("Quiz results file must contain a JSON object.");
    }

    return results;
  } catch (error) {
    if (error.code === "ENOENT") {
      return {};
    }

    throw error;
  }
}

app.get("/api/quiz-results", async function (request, response) {
  try {
    const results = await readQuizResults();
    response.json({ results });
  } catch (error) {
    console.error("Could not read quiz results:", error.message);
    response.status(500).json({ error: "Could not load saved quiz results." });
  }
});

app.post("/api/quiz-results", async function (request, response) {
  const { topic, score } = request.body || {};

  if (!quizTopics.has(topic)) {
    return response.status(400).json({ error: "Choose a valid quiz topic." });
  }

  if (!Number.isInteger(score) || score < 0 || score > 5) {
    return response
      .status(400)
      .json({ error: "The quiz score must be a whole number from 0 to 5." });
  }

  try {
    const results = await readQuizResults();
    const previousAttempts = Number(results[topic]?.retakes) || 0;
    const result = {
      status: score >= 3 ? "Passed" : "Failed",
      score,
      total: 5,
      retakes: previousAttempts + 1,
    };

    results[topic] = result;
    await fs.mkdir(dataDirectory, { recursive: true });
    await fs.writeFile(resultsFile, JSON.stringify(results, null, 2), "utf8");

    response.status(201).json({ result });
  } catch (error) {
    console.error("Could not save quiz results:", error.message);
    response.status(500).json({ error: "Could not save your quiz result." });
  }
});

app.use(express.static(__dirname, { dotfiles: "ignore" }));

app.listen(port, "0.0.0.0", function () {
  console.log(`EduXplore is running on port ${port}.`);
});
