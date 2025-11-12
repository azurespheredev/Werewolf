import * as dotenv from 'dotenv';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

import api from './routes';
import { SERVER_PORT } from '../lib/constants';

// config
dotenv.config();

const app = express();
const httpServer = createServer(app);

// Initialize Socket.io
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// middleware
app.use(logger('dev'));
app.use(cors({ origin: '*' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/api', api);

app.get('/', (_, res) => {
  res.status(200).send('🟢 The Werewolf Game server is healthy. 🟢');
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);

  // Join room
  socket.on('join-room', (roomCode: string) => {
    socket.join(roomCode);
    console.log(`Socket ${socket.id} joined room ${roomCode}`);
    socket.to(roomCode).emit('player-joined', { socketId: socket.id });
  });

  // Leave room
  socket.on('leave-room', (roomCode: string) => {
    socket.leave(roomCode);
    console.log(`Socket ${socket.id} left room ${roomCode}`);
    socket.to(roomCode).emit('player-left', { socketId: socket.id });
  });

  // Player explicitly left (with player ID)
  socket.on('player-left', (data: { roomCode: string; playerId: number }) => {
    console.log(`Player ${data.playerId} left room ${data.roomCode}`);
    socket.to(data.roomCode).emit('player-left', data);
  });

  // Player ready
  socket.on('player-ready', (data: { roomCode: string; playerId: number }) => {
    io.to(data.roomCode).emit('player-ready-update', data);
  });

  // Game started
  socket.on('game-started', (data: { roomCode: string }) => {
    io.to(data.roomCode).emit('game-started', data);
  });

  // Phase changed
  socket.on(
    'phase-changed',
    (data: { roomCode: string; phase: string; dayNumber: number }) => {
      io.to(data.roomCode).emit('phase-changed', data);
    },
  );

  // Action submitted
  socket.on(
    'action-submitted',
    (data: { roomCode: string; playerId: number }) => {
      io.to(data.roomCode).emit('action-submitted', data);
    },
  );

  // Vote submitted
  socket.on(
    'vote-submitted',
    (data: { roomCode: string; playerId: number }) => {
      io.to(data.roomCode).emit('vote-submitted', data);
    },
  );

  // Player eliminated
  socket.on(
    'player-eliminated',
    (data: { roomCode: string; playerId: number }) => {
      io.to(data.roomCode).emit('player-eliminated', data);
    },
  );

  // Game ended
  socket.on('game-ended', (data: { roomCode: string; winner: string }) => {
    io.to(data.roomCode).emit('game-ended', data);
  });

  // Chat message
  socket.on(
    'chat-message',
    (data: {
      roomCode: string;
      playerId: number;
      message: string;
      playerName: string;
    }) => {
      io.to(data.roomCode).emit('chat-message', data);
    },
  );

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

httpServer.listen(SERVER_PORT, () => {
  console.info(`🟢 Server is running on port ${SERVER_PORT}`);
  console.info(`🔌 WebSocket server is ready`);
});
