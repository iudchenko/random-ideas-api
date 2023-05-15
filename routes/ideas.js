const express = require("express");
const router = express.Router();

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

// Get all ideas
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, erorr: "Resource not found" });
  }

  res.json({ success: true, data: idea });
});

// Add and idea
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ success: true, data: idea });
});

// Update idea
router.put("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, erorr: "Resource not found" });
  }

  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  res.json({ success: true, data: idea });
});

// Delete and idea
router.delete("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, erorr: "Resource not found" });
  }

  const index = ideas.indexOf(idea);

  ideas.splice(index, 1);

  res.json({ success: true, data: {} });
});

module.exports = router;
