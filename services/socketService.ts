import { io, Socket } from "socket.io-client";
import { GamePhaseEnum } from "../lib/enums";

type SocketCallback = (...args: unknown[]) => void;

class SocketService {
  private socket: Socket | null = null;
  private serverUrl: string = "";

  connect(serverUrl?: string) {
    if (this.socket?.connected) {
      return;
    }

    this.serverUrl = serverUrl ?? (typeof window !== "undefined" ? window.location.origin : "");
  const options = { transports: ["websocket", "polling"] };
    this.socket = serverUrl ? io(serverUrl, options) : io(options);

    this.socket.on("connect", () => {
      console.log("✅ Connected to WebSocket server");
    });

    this.socket.on("disconnect", () => {
      console.log("❌ Disconnected from WebSocket server");
    });

    this.socket.on("connect_error", (error) => {
      console.error("WebSocket connection error:", error);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  isConnected(): boolean {
    return this.socket?.connected || false;
  }

  // Room management
  joinRoom(roomCode: string) {
    if (this.socket) {
      this.socket.emit("join-room", roomCode);
    }
  }

  leaveRoom(roomCode: string) {
    if (this.socket) {
      this.socket.emit("leave-room", roomCode);
    }
  }

  // Player events
  emitPlayerReady(roomCode: string, playerId: number) {
    if (this.socket) {
      this.socket.emit("player-ready", { roomCode, playerId });
    }
  }

  emitPlayerLeft(roomCode: string, playerId: number) {
    if (this.socket) {
      this.socket.emit("player-left", { roomCode, playerId });
    }
  }

  onPlayerJoined(callback: SocketCallback) {
    if (this.socket) {
      this.socket.on("player-joined", callback);
    }
  }

  onPlayerLeft(callback: SocketCallback) {
    if (this.socket) {
      this.socket.on("player-left", callback);
    }
  }

  onPlayerReadyUpdate(callback: SocketCallback) {
    if (this.socket) {
      this.socket.on("player-ready-update", callback);
    }
  }

  // Game events
  emitGameStarted(roomCode: string) {
    if (this.socket) {
      this.socket.emit("game-started", { roomCode });
    }
  }

  onGameStarted(callback: SocketCallback) {
    if (this.socket) {
      this.socket.on("game-started", callback);
    }
  }

  emitPhaseChanged(roomCode: string, phase: GamePhaseEnum, dayNumber: number) {
    if (this.socket) {
      this.socket.emit("phase-changed", { roomCode, phase, dayNumber });
    }
  }

  onPhaseChanged(callback: SocketCallback) {
    if (this.socket) {
      this.socket.on("phase-changed", callback);
    }
  }

  emitActionSubmitted(roomCode: string, playerId: number) {
    if (this.socket) {
      this.socket.emit("action-submitted", { roomCode, playerId });
    }
  }

  onActionSubmitted(callback: SocketCallback) {
    if (this.socket) {
      this.socket.on("action-submitted", callback);
    }
  }

  emitVoteSubmitted(roomCode: string, playerId: number) {
    if (this.socket) {
      this.socket.emit("vote-submitted", { roomCode, playerId });
    }
  }

  onVoteSubmitted(callback: SocketCallback) {
    if (this.socket) {
      this.socket.on("vote-submitted", callback);
    }
  }

  emitPlayerEliminated(roomCode: string, playerId: number) {
    if (this.socket) {
      this.socket.emit("player-eliminated", { roomCode, playerId });
    }
  }

  onPlayerEliminated(callback: SocketCallback) {
    if (this.socket) {
      this.socket.on("player-eliminated", callback);
    }
  }

  emitGameEnded(roomCode: string, winner: string) {
    if (this.socket) {
      this.socket.emit("game-ended", { roomCode, winner });
    }
  }

  onGameEnded(callback: SocketCallback) {
    if (this.socket) {
      this.socket.on("game-ended", callback);
    }
  }

  // Chat
  emitChatMessage(roomCode: string, playerId: number, message: string, playerName: string) {
    if (this.socket) {
      this.socket.emit("chat-message", { roomCode, playerId, message, playerName });
    }
  }

  onChatMessage(callback: SocketCallback) {
    if (this.socket) {
      this.socket.on("chat-message", callback);
    }
  }

  // Cleanup
  removeAllListeners() {
    if (this.socket) {
      this.socket.removeAllListeners();
    }
  }
}

export const socketService = new SocketService();
export default socketService;
