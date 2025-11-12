# 🚀 Quick Start Guide - Werewolf Game

## Prerequisites

- Node.js (v14+)
- PostgreSQL database
- npm or yarn

## 1. Database Setup

### Create PostgreSQL Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE werewolf;

# Exit
\q
```

### Configure Environment

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/werewolf"
```

Replace `password` with your PostgreSQL password.

## 2. Install Dependencies

```bash
npm install
```

## 3. Database Migration & Seeding

```bash
# Generate Prisma client
npm run db:generate

# Run migrations (creates tables)
npm run db:migrate

# Seed the database with characters
npm run db:seed
```

## 4. Start the Application

### Terminal 1 - API Server

```bash
npm run dev:api
```

The API will run on `http://localhost:8888`

### Terminal 2 - Electron App

```bash
npm start
```

## 5. Testing the App

### Welcome Page

1. Enter server IP: `localhost` or `127.0.0.1`
2. Click "Connect"

### Home Page

You'll see three options:

- **Create Room** - Start a new game
- **Join Room** - Join an existing game
- **Quit Game** - Exit

### Create Room

1. Enter your username
2. Select number of players (4-23)
3. Review auto-selected roles or customize
4. Set timer limit (30-300 seconds)
5. Toggle "Show roles after game"
6. Click "Create Room"

### Join Room

1. Enter your username
2. Either:
   - Enter room code manually
   - Browse and join from active rooms list
3. Click "Join"

### Waiting Room

- See all players joining
- Host can start game when all slots filled
- Other players wait for host to start

## 🎮 Testing on LAN

### Server Machine (Host)

1. Find your IP address:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`
2. Note your local IP (e.g., `192.168.1.100`)

### Client Machines

1. Launch the app
2. Enter server IP: `192.168.1.100` (your host IP)
3. Create/Join rooms

## 📝 Verification Checklist

- [ ] Database connected successfully
- [ ] API server running on port 8888
- [ ] Electron app launches
- [ ] Can connect to server
- [ ] 17 characters loaded
- [ ] Can create room
- [ ] Can join room
- [ ] Players appear in waiting room
- [ ] Room code works

## 🐛 Troubleshooting

### "Cannot connect to server"

- Check API server is running (`npm run dev:api`)
- Verify port 8888 is not blocked
- Check IP address is correct

### "Failed to load characters"

- Run `npm run db:seed` again
- Check database connection
- Verify DATABASE_URL in .env

### Database errors

```bash
# Reset database and re-migrate
npm run db:reset
npm run db:seed
```

### Prisma Client errors

```bash
# Regenerate Prisma client
npm run db:generate
```

## 📱 For Development

### View Database

```bash
npm run db:studio
```

Opens Prisma Studio at `http://localhost:5555`

### Lint & Format

```bash
npm run lint
npm run format
```

### Build Production

```bash
npm run package
```

## 🎯 Next Steps

After verifying the basics work:

1. Implement GamePage for actual gameplay
2. Add WebSocket for real-time updates
3. Complete game logic (night/day phases)
4. Add voting system
5. Implement win conditions

## 💡 Tips

- Use `localhost` for local testing
- Use actual IP for LAN multiplayer
- Each player needs their own device/app instance
- Host must start API server
- Room codes are unique (UUID)

---

**Ready to Play!** 🐺🌙

For detailed implementation info, see `IMPLEMENTATION_SUMMARY.md`
