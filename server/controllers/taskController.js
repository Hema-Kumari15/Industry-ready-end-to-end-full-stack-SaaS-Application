const Task = require('../models/Task');
const { generateSuggestions } = require('../utils/aiHelper');

exports.createTask = async (req, res) => {
  const count = await Task.countDocuments({ userId: req.user._id });

  if (req.user.plan === "free" && count >= 5) {
    return res.status(403).json("Upgrade plan");
  }

  const suggestions = generateSuggestions(req.body.title);

  const task = await Task.create({
    title: req.body.title,
    userId: req.user._id
  });

  res.json({ task, suggestions });
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user._id });
  res.json(tasks);
};
