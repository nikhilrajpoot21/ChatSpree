// server.js
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
 
const app = express();
const port = 8000;

app.use(cors());

// For checking server is up
app.get("/", (req, res) => {
  res.send("Hello server side");
});

// Create HTTP server
const httpServer = createServer(app);

// Create socket.io server
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Socket logic
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join-event", (name) => {
    console.log("User joined:", name);
    socket.data.username = name; // store username on socket
  });

  socket.on("join-room", ({username,room}) => {
    socket.join(room);
    console.log(`User ${username} joined room: ${room}`);
  });

  socket.on("send-message", (data) => {
      console.log(`Message from ${data.sender} in room ${data.room}: ${data.text}`);

      socket.broadcast.to(data.room).emit("receive-message", {
        username: data.sender,
        message: data.text,
      });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server
httpServer.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
