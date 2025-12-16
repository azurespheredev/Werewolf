/* Simple Socket.IO server for Werewolf (dev/prod compatible)
  Run with: pnpm run ws (see package.json)
*/
import http from 'http';
import { Server } from 'socket.io';

const PORT = process.env.WS_PORT ? Number(process.env.WS_PORT) : 4000;
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || '*'; // For dev, allow all. Set to your Next.js origin in prod.

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: ALLOW_ORIGIN,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

io.on('connection', (socket) => {
  // Room management
  socket.on('join-room', (roomCode) => {
    socket.join(roomCode);
    socket.to(roomCode).emit('player-joined', { socketId: socket.id, roomCode });
  });

  socket.on('leave-room', (roomCode) => {
    socket.leave(roomCode);
    socket.to(roomCode).emit('player-left', { socketId: socket.id, roomCode });
  });

  // Player events
  socket.on('player-ready', ({ roomCode, playerId }) => {
    socket.to(roomCode).emit('player-ready-update', { playerId });
  });

  socket.on('player-left', ({ roomCode, playerId }) => {
    socket.to(roomCode).emit('player-left', { playerId });
  });

  // Game events
  socket.on('game-started', ({ roomCode }) => {
    io.to(roomCode).emit('game-started');
  });

  socket.on('phase-changed', ({ roomCode, phase, dayNumber }) => {
    io.to(roomCode).emit('phase-changed', { phase, dayNumber });
  });

  socket.on('action-submitted', ({ roomCode, playerId }) => {
    io.to(roomCode).emit('action-submitted', { playerId });
  });

  socket.on('vote-submitted', ({ roomCode, playerId }) => {
    io.to(roomCode).emit('vote-submitted', { playerId });
  });

  socket.on('player-eliminated', ({ roomCode, playerId }) => {
    io.to(roomCode).emit('player-eliminated', { playerId });
  });

  socket.on('game-ended', ({ roomCode, winner }) => {
    io.to(roomCode).emit('game-ended', { winner });
  });

  // Night coordination (e.g., wolves consensus)
  socket.on('wolf-select', ({ roomCode, playerId, targetId }) => {
    socket.to(roomCode).emit('wolf-selection', { playerId, targetId });
  });

  // Chat
  socket.on('chat-message', ({ roomCode, playerId, message, playerName }) => {
    io.to(roomCode).emit('chat-message', { playerId, message, playerName, timestamp: Date.now() });
  });
});

server.listen(PORT, () => {
  console.log(`\u2705 Socket.IO server listening on http://localhost:${PORT}`);
  console.log(`   CORS origin: ${ALLOW_ORIGIN}`);
});
