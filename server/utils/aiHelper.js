exports.generateSuggestions = (title) => {
  const t = title.toLowerCase();

  if (t.includes("project"))
    return ["Research", "Design", "Develop", "Test"];

  if (t.includes("study"))
    return ["Read", "Practice", "Revise"];

  return ["Plan", "Execute", "Review"];
};
