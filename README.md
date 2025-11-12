# Werewolf Game - Next.js Web Application

Migrated from Electron desktop app to Next.js web application.

## What Was Changed

### ✅ Completed Migrations

1. **Removed Welcome Page** - The app now starts directly at the home page (`/`)
2. **Removed Quit Button** - No longer needed for web application
3. **Updated Home Page** - Displays only "Create Room" and "Join Room" buttons
4. **Migrated All Core Infrastructure**:
   - Prisma database schema
   - Redux store and state management
   - API and Socket services
   - All shared UI components
   - Game styling and animations

### 📝 Remaining Work

To complete the migration, you need to create these page files by copying from the Electron project:

```bash
# Create these files in werewolf/app/
app/create-room/page.tsx    # From Electron/src/renderer/pages/CreateRoomPage.tsx
app/join-room/page.tsx      # From Electron/src/renderer/pages/JoinRoomPage.tsx
app/waiting-room/page.tsx   # From Electron/src/renderer/pages/WaitingRoomPage.tsx
app/game/page.tsx           # From Electron/src/renderer/pages/GamePage.tsx
```

**Important**: When copying, make sure to:

- Add `'use client';` at the top of each file
- Change `import { useNavigate } from 'react-router-dom'` to `import { useRouter } from 'next/navigation'`
- Change `navigate(RouteEnum.X)` to `router.push(RouteEnum.X)`
- Remove any `window.electron` references

## Installation

```bash
cd werewolf
npm install
```

## Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate

# (Optional) Open Prisma Studio
npm run db:studio
```

## Environment Variables

Create `.env.local`:

```
DATABASE_URL="postgresql://user:password@localhost:5432/werewolf"
```

## Assets

Copy these directories from `Electron/public/` to `werewolf/public/`:

- `images/` (all subdirectories)
- `sounds/` (optional)

## Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## Key Differences from Electron Version

| Electron                       | Next.js                 |
| ------------------------------ | ----------------------- |
| Welcome page with server input | Starts at home page     |
| Quit button in UI              | Users close browser tab |
| `window.electron.ipcRenderer`  | Regular HTTP/WebSocket  |
| Desktop only                   | Works on all devices    |
| Routes start at `/welcome`     | Routes start at `/`     |

## Next Steps

1. Install dependencies: `npm install`
2. Copy remaining page files as listed above
3. Copy public assets (images)
4. Setup database
5. Test the application

See `MIGRATION_GUIDE.md` for complete details.
