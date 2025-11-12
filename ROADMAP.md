# 🗺️ Development Roadmap - Werewolf Game

## ✅ Phase 1: Foundation (COMPLETED)

### Database Architecture

- [x] Enhanced Prisma schema with all models
- [x] rooms, roles, GameSession, GameLog, ChatMessage tables
- [x] Team and priority fields for characters
- [x] Room code system with UUID

### Type System

- [x] Complete TypeScript types for all entities
- [x] Game phase enums
- [x] Team enums
- [x] API response types

### UI Components

- [x] AnimatedBackground with day/night transitions
- [x] CharacterCard with 3D flip animation
- [x] Timer with circular progress
- [x] Enhanced animations (fade, pulse, glow)

### Pages

- [x] WelcomePage - Server connection
- [x] HomePage - Main menu
- [x] CreateRoomPage - Full role selection UI
- [x] JoinRoomPage - Room browser and join
- [x] WaitingRoomPage - Player lobby
- [x] GamePage - Stub with layout

### API Endpoints

- [x] GET /api/roles - List all characters
- [x] POST /api/rooms/create - Create room
- [x] POST /api/rooms/join - Join room
- [x] GET /api/rooms/active - List rooms
- [x] GET /api/rooms/:code - Get room details

---

## 🚧 Phase 2: Game Logic (IN PROGRESS)

### Backend Controllers

#### GameController.ts (Priority: HIGH)

```typescript
// Endpoints needed:
- POST /api/game/start        // Initialize game session
- POST /api/game/action       // Submit night action
- POST /api/game/vote         // Submit vote
- GET  /api/game/:roomId      // Get game state
- POST /api/game/phase        // Transition phase (admin only)
```

**Implementation Tasks:**

- [ ] Start game logic
  - Shuffle and assign roles to players
  - Create GameSession record
  - Initialize alivePlayers array
  - Set phase to NIGHT, day 1
- [ ] Night action processing
  - Validate action based on player's role
  - Store in nightActions JSON
  - Check if all actions submitted
- [ ] Day/Voting logic
  - Accept vote submissions
  - Store in votes JSON
  - Count votes when timer ends
- [ ] Phase transition logic
  - Process night actions in priority order
  - Resolve conflicts (witch save vs werewolf kill)
  - Update alive/dead players
  - Create GameLog entries
  - Check win conditions

### Game Manager Service (NEW)

#### GameManager.ts

```typescript
class GameManager {
  // Process all night actions in correct order
  processNightActions(sessionId: number): Promise<GameLog[]>;

  // Determine elimination from votes
  processVoting(sessionId: number): Promise<number | null>;

  // Check if game has winner
  checkWinCondition(session: GameSession): 'villager' | 'werewolf' | null;

  // Execute specific role actions
  werewolfKill(targetId: number): void;
  doctorProtect(targetId: number): void;
  seerReveal(targetId: number): CharacterType;
  witchHeal(targetId: number): void;
  witchKill(targetId: number): void;
  // ... other role actions
}
```

**Tasks:**

- [ ] Create GameManager service class
- [ ] Implement action resolution by priority
- [ ] Add conflict resolution (multiple actions on same player)
- [ ] Win condition checker
- [ ] Role-specific action handlers

### Real-time Communication (Priority: HIGH)

#### WebSocket Integration

```bash
npm install socket.io socket.io-client
```

**Server-side (src/api/index.ts):**

```typescript
import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  socket.on('join-room', (roomCode) => {
    socket.join(roomCode);
  });

  socket.on('player-action', (data) => {
    io.to(data.roomCode).emit('action-received', data);
  });

  socket.on('phase-change', (data) => {
    io.to(data.roomCode).emit('phase-changed', data);
  });
});
```

**Client-side (src/services/socketService.ts):**

```typescript
import { io, Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket;

  connect(serverUrl: string) {
    this.socket = io(serverUrl);
  }

  joinRoom(roomCode: string) {
    this.socket.emit('join-room', roomCode);
  }

  onPhaseChange(callback: (phase: GamePhaseEnum) => void) {
    this.socket.on('phase-changed', callback);
  }
}
```

**Tasks:**

- [ ] Install Socket.io packages
- [ ] Create SocketService class
- [ ] Integrate with API server
- [ ] Connect from Electron app
- [ ] Emit/listen for events:
  - player-joined
  - player-left
  - player-ready
  - game-started
  - phase-changed
  - action-submitted
  - player-eliminated
  - game-ended

---

## 🎮 Phase 3: Complete GamePage (NEXT)

### Night Phase UI

- [ ] Display "Your turn" indicator for active role
- [ ] Player grid with selectable targets
- [ ] Role-specific action buttons
- [ ] "No action" / "Skip" option
- [ ] Wait indicator when action submitted
- [ ] Other players status (waiting/done)

### Day Phase UI

- [ ] Discussion timer
- [ ] Chat system (optional)
- [ ] Game log showing night events
- [ ] Alive/dead player indicators
- [ ] Transition to voting phase

### Voting Phase UI

- [ ] Voting interface
- [ ] Vote count display (if public)
- [ ] Timer countdown
- [ ] Elimination animation
- [ ] Hunter revenge action (if hunter eliminated)

### End Game UI

- [ ] Results screen
- [ ] Winner announcement
- [ ] Role reveals for all players
- [ ] Game statistics
- [ ] Play again option

---

## 🎨 Phase 4: Polish & Features

### Visual Enhancements

- [ ] Character elimination animations
- [ ] Vote result particles
- [ ] Phase transition effects
- [ ] Role reveal cinematics
- [ ] Winner celebration animation

### Sound Design

- [ ] Background music for each phase
  - Calm music for day
  - Suspenseful music for night
  - Tense music for voting
- [ ] Sound effects:
  - Player join/leave
  - Timer ticking (last 10 seconds)
  - Vote cast
  - Player elimination
  - Phase transition
  - Win/lose fanfare

### Chat System

- [ ] Real-time chat during day phase
- [ ] System messages
- [ ] Werewolf team chat during night
- [ ] Mason team chat (always)
- [ ] Emoji support
- [ ] Chat history

### Quality of Life

- [ ] Reconnection handling
  - Save player state in localStorage
  - Rejoin in-progress game
  - Spectator mode if dead
- [ ] Game settings
  - Volume controls
  - Animation speed
  - Chat visibility
- [ ] Tutorial mode
  - First-time player guide
  - Role explanation overlays
  - Practice game with bots

---

## 📊 Phase 5: Advanced Features

### Statistics & History

- [ ] Player stats tracking
  - Games played
  - Win rate by role
  - Survival rate
  - Actions taken
- [ ] Match history
  - Past games list
  - Replay viewer
  - Export game log

### Additional Game Modes

- [ ] Quick game (fewer roles)
- [ ] Extended game (more roles)
- [ ] Custom rules
  - No reveal mode
  - Multiple werewolf kills
  - Day start instead of night
- [ ] Tournament mode
  - Multiple rounds
  - Point system
  - Leaderboard

### Social Features

- [ ] Player profiles
- [ ] Friend system
- [ ] Private rooms
- [ ] Room passwords
- [ ] Spectator slots

---

## 🔧 Phase 6: Testing & Optimization

### Testing

- [ ] Unit tests for game logic
- [ ] Integration tests for API
- [ ] E2E tests with Playwright
- [ ] Load testing (simulate 20+ players)
- [ ] Network delay simulation

### Performance

- [ ] Optimize database queries
- [ ] Add caching layer (Redis)
- [ ] Compress WebSocket messages
- [ ] Lazy load character images
- [ ] Code splitting for pages

### Security

- [ ] Input validation
- [ ] Rate limiting
- [ ] Prevent cheating (role inspection)
- [ ] Sanitize chat messages
- [ ] HTTPS for production

---

## 📦 Phase 7: Deployment

### Production Build

- [ ] Environment configurations
- [ ] Build optimization
- [ ] Asset compression
- [ ] Error tracking (Sentry)
- [ ] Analytics (optional)

### Electron Packaging

- [ ] Windows installer
- [ ] macOS DMG
- [ ] Linux AppImage
- [ ] Auto-update system
- [ ] Crash reporting

### Server Deployment

- [ ] Docker containerization
- [ ] Kubernetes orchestration (optional)
- [ ] Cloud hosting (AWS/Azure/GCP)
- [ ] Database backup strategy
- [ ] Monitoring & logging

---

## 🎯 Priority Order

### Week 1-2: Core Gameplay

1. GameController with start/action/vote endpoints
2. WebSocket integration
3. Night phase complete implementation
4. Day phase and voting
5. Win condition logic

### Week 3: GamePage UI

1. Complete night phase UI
2. Complete day phase UI
3. Complete voting UI
4. End game screen
5. Testing with multiple players

### Week 4: Polish

1. Animations and transitions
2. Sound effects
3. Chat system
4. Bug fixes
5. Performance optimization

### Week 5+: Advanced

1. Statistics
2. Additional game modes
3. Tutorial
4. Production deployment

---

## 📚 Resources Needed

### NPM Packages

```json
{
  "socket.io": "^4.5.0",
  "socket.io-client": "^4.5.0",
  "howler": "^2.2.3", // Sound management
  "framer-motion": "^10.0.0", // Advanced animations
  "react-confetti": "^6.1.0", // Winner celebration
  "@sentry/electron": "^4.0.0" // Error tracking
}
```

### Assets

- Sound effects library
- Background music tracks
- Additional character artwork
- UI icons and badges
- Victory/defeat animations

---

## 🐛 Known Issues & Technical Debt

- [ ] Lint errors in new files (CRLF vs LF)
- [ ] Database migration needs to be run
- [ ] CharacterCard unused `useState` for flip
- [ ] Modal backdrop click to close
- [ ] Input components need proper labels
- [ ] Timer component needs cleanup on unmount

---

## 💡 Ideas for Future

- Mobile app version (React Native)
- Web version (browser-based)
- Twitch integration for streaming
- Custom character creator
- AI players for practice
- Multiple language support
- Accessibility features (colorblind mode, screen reader)

---

## 📝 Development Notes

### Current State

- Foundation: ✅ 100% Complete
- Backend API: ⏳ 60% Complete
- Frontend UI: ⏳ 70% Complete
- Game Logic: ❌ 0% Complete
- Real-time: ❌ 0% Complete
- Testing: ❌ 0% Complete

### Next Action Items

1. Run database migration
2. Test Create Room flow end-to-end
3. Test Join Room flow
4. Implement WebSocket server
5. Create GameController endpoints
6. Build GameManager service
7. Complete GamePage night phase

---

**Last Updated**: November 11, 2025
**Status**: Phase 1 Complete, Phase 2 Started
**Team**: Open for contributions!
