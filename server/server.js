const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const { Server } = require('socket.io');

connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  socket.on("taskUpdate", (data) => {
    socket.broadcast.emit("taskUpdated", data);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server running"));
