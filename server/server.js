// server.js
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { Queue } from "./PairPool.js";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());

// HTTP server
const httpServer = createServer(app);

// Socket.IO server
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

//Generate unique room ID
function generateRoomId() {
  return `room_${Math.random().toString(36).substring(2, 10)}`;
}

// Matchmaking queue
const pairpool = new Queue();

// Main socket logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  pairpool.enqueue(socket.id);

  // Optional: assign username via frontend emit
  socket.on("join-event", (name) => {
    socket.data.username = name;
    console.log(`User ${name} joined with ID: ${socket.id}`);
  });

  // Pair users if 2 or more are waiting
if (pairpool.getLength() >= 2) {
  const userA = pairpool.dequeue();
  const userB = pairpool.dequeue();

  const socketA = io.sockets.sockets.get(userA);
  const socketB = io.sockets.sockets.get(userB);

  // Validate both sockets exist
  if (socketA && socketB) {
    const roomId = generateRoomId();

    socketA.join(roomId);
    socketB.join(roomId);

    socketA.data.room = roomId;
    socketB.data.room = roomId;

    io.to(roomId).emit("paired", {
      roomId,
      users: [socketA.data.username || userA, socketB.data.username || userB],
    });

    console.log(`Room ${roomId} created: ${userA} + ${userB}`);
  } else {
    // One or both sockets missing—re-enqueue
    if (userA) pairpool.enqueue(userA);
    if (userB) pairpool.enqueue(userB);
    console.log("Pairing failed: one or both sockets not found. Re-queued.");
  }
}

  // Message
  socket.on("send-message", (data) => {
    console.log(`From ${data.sender}: ${data.text}`);
    socket.broadcast.to(data.room).emit("receive-message", {
      username: data.sender,
      message: data.text,
    });
  });

  // Disconnection logic
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    const roomId = socket.data.room;
    if (roomId) {
      const members = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
      members.forEach((id) => {
        if (id !== socket.id) {
          const sock = io.sockets.sockets.get(id);
          sock?.leave(roomId);
          pairpool.enqueue(id);
          sock?.emit("requeued");
        }
      });
      console.log(`Room ${roomId} dissolved due to disconnect.`);
    }
  });
});

// Start server
httpServer.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
