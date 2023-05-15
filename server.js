const express = require("express");
const port = 5001;

const ideas = [
  {
    id: 1,
    text: "Test 1",
    tag: "Test",
    username: "Batman",
    date: "2022-05-15",
  },
  {
    id: 2,
    text: "Test 2",
    tag: "Test 2",
    username: "Superman",
    date: "2023-05-15",
  },
  {
    id: 3,
    text: "Test 3",
    tag: "Test 3",
    username: "Spiderman",
    date: "2024-05-15",
  },
];

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the RandomIdeas API" });
});

// Get all ideas
app.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
app.get("/api/ideas/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, erorr: "Resource not found" });
  }

  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
