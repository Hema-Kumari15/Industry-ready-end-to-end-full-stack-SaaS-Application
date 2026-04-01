import { useEffect, useState } from "react";
import API from "../services/api";
import io from "socket.io-client";
import Analytics from "./Analytics";

const socket = io("http://localhost:5000");

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const createTask = async () => {
    const res = await API.post("/tasks", { title });
    setSuggestions(res.data.suggestions);
    socket.emit("taskUpdate", res.data.task);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
    socket.on("taskUpdated", fetchTasks);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <input onChange={(e) => setTitle(e.target.value)} />
      <button onClick={createTask}>Add Task</button>

      {suggestions.map((s, i) => (
        <p key={i}>👉 {s}</p>
      ))}

      {tasks.map((t) => (
        <p key={t._id}>{t.title}</p>
      ))}

      <Analytics />
    </div>
  );
}

export default Dashboard;
