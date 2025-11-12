import { prisma } from '../../../prisma/client';
import { PlayerType, NightActionType } from '../../lib/types';
import { GamePhaseEnum } from '../../lib/enums';
import { Team } from '../../../generated/prisma';

interface ActionResult {
  playerId: number;
  action: string;
  targetId: number | null;
  success: boolean;
  description: string;
}

export class GameManager {
  /**
   * Process all night actions in priority order
   */
  async processNightActions(
    sessionId: number,
  ): Promise<{ results: ActionResult[]; deaths: number[] }> {
    const session = await prisma.gameSession.findUnique({
      where: { id: sessionId },
      include: { room: true },
    });

    if (!session) {
      throw new Error('Game session not found');
    }

    const players: PlayerType[] = JSON.parse(session.room.players);
    const nightActions: Record<number, NightActionType> = JSON.parse(
      session.nightActions,
    );
    const alivePlayers: number[] = JSON.parse(session.alivePlayers);

    // Get roles for action processing
    const roles = await prisma.roles.findMany();
    const roleMap = new Map(roles.map((r) => [r.id, r]));

    const results: ActionResult[] = [];
    const protectedPlayers = new Set<number>();
    const healedPlayers = new Set<number>();
    const targetedForDeath = new Set<number>();

    // Sort actions by role priority
    const sortedActions = Object.entries(nightActions)
      .map(([playerIdStr, action]) => ({
        playerId: parseInt(playerIdStr, 10),
        action,
        role: roleMap.get(players[parseInt(playerIdStr, 10)].role),
      }))
      .sort((a, b) => (a.role?.priority || 0) - (b.role?.priority || 0));

    // Process each action
    for (const { playerId, action, role } of sortedActions) {
      if (!alivePlayers.includes(playerId)) continue;

      const target = action.target;
      const player = players[playerId];

      switch (role?.name) {
        case 'Cupid':
          if (target !== null) {
            results.push({
              playerId,
              action: 'cupid',
              targetId: target,
              success: true,
              description: `Cupid made Player ${playerId + 1} and Player ${target + 1} fall in love`,
            });
          }
          break;

        case 'Seer':
          if (target !== null && alivePlayers.includes(target)) {
            const targetRole = roleMap.get(players[target].role);
            results.push({
              playerId,
              action: 'seer',
              targetId: target,
              success: true,
              description: `Seer revealed Player ${target + 1} is ${targetRole?.name}`,
            });
          }
          break;

        case 'Werewolf':
        case 'Alpha Wolf':
          if (target !== null && alivePlayers.includes(target)) {
            targetedForDeath.add(target);
            results.push({
              playerId,
              action: 'attack',
              targetId: target,
              success: true,
              description: `Werewolves targeted Player ${target + 1}`,
            });
          }
          break;

        case 'Doctor':
          if (target !== null) {
            protectedPlayers.add(target);
            results.push({
              playerId,
              action: 'protect',
              targetId: target,
              success: true,
              description: `Doctor protected Player ${target + 1}`,
            });
          }
          break;

        case 'Witch':
          // Witch can heal or kill
          if (action.action === 'heal' && target !== null) {
            healedPlayers.add(target);
            results.push({
              playerId,
              action: 'heal',
              targetId: target,
              success: true,
              description: `Witch healed Player ${target + 1}`,
            });
          } else if (action.action === 'kill' && target !== null) {
            targetedForDeath.add(target);
            results.push({
              playerId,
              action: 'poison',
              targetId: target,
              success: true,
              description: `Witch poisoned Player ${target + 1}`,
            });
          }
          break;

        case 'Sorcerer':
          if (target !== null && alivePlayers.includes(target)) {
            const targetRole = roleMap.get(players[target].role);
            results.push({
              playerId,
              action: 'sorcerer',
              targetId: target,
              success: true,
              description: `Sorcerer checked Player ${target + 1}, found ${targetRole?.name === 'Seer' ? 'the Seer!' : 'not the Seer'}`,
            });
          }
          break;
      }
    }

    // Resolve deaths
    const deaths: number[] = [];
    for (const targetId of targetedForDeath) {
      if (!protectedPlayers.has(targetId) && !healedPlayers.has(targetId)) {
        deaths.push(targetId);
      }
    }

    return { results, deaths };
  }

  /**
   * Process voting and determine elimination
   */
  async processVoting(sessionId: number): Promise<number | null> {
    const session = await prisma.gameSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      throw new Error('Game session not found');
    }

    const votes: Record<number, number> = JSON.parse(session.votes);
    const voteCounts = new Map<number, number>();

    // Count votes
    for (const targetId of Object.values(votes)) {
      voteCounts.set(targetId, (voteCounts.get(targetId) || 0) + 1);
    }

    // Find player with most votes
    let maxVotes = 0;
    let eliminatedPlayer: number | null = null;

    for (const [playerId, count] of voteCounts.entries()) {
      if (count > maxVotes) {
        maxVotes = count;
        eliminatedPlayer = playerId;
      }
    }

    return eliminatedPlayer;
  }

  /**
   * Check win conditions
   */
  async checkWinCondition(
    sessionId: number,
  ): Promise<'villager' | 'werewolf' | null> {
    const session = await prisma.gameSession.findUnique({
      where: { id: sessionId },
      include: { room: true },
    });

    if (!session) {
      return null;
    }

    const players: PlayerType[] = JSON.parse(session.room.players);
    const alivePlayers: number[] = JSON.parse(session.alivePlayers);
    const roles = await prisma.roles.findMany();
    const roleMap = new Map(roles.map((r) => [r.id, r]));

  let aliveWerewolves = 0;
  let aliveVillagers = 0;

    for (const playerId of alivePlayers) {
      const player = players[playerId];
      const role = roleMap.get(player.role);

      if (role?.team === Team.werewolf) {
        aliveWerewolves++;
      } else if (role?.team === Team.villager) {
        aliveVillagers++;
      }
    }

    // Werewolves win if they equal or outnumber villagers
    if (aliveWerewolves >= aliveVillagers && aliveWerewolves > 0) {
      return 'werewolf';
    }

    // Villagers win if all werewolves are dead
    if (aliveWerewolves === 0) {
      return 'villager';
    }

    return null;
  }

  /**
   * Transition to next phase
   */
  async transitionPhase(
    sessionId: number,
    nextPhase: GamePhaseEnum,
  ): Promise<void> {
    const session = await prisma.gameSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      throw new Error('Game session not found');
    }

    let dayNumber = session.dayNumber;
    if (nextPhase === GamePhaseEnum.DAY) {
      dayNumber += 1;
    }

    await prisma.gameSession.update({
      where: { id: sessionId },
      data: {
        phase: nextPhase,
        dayNumber,
        currentPhaseStarted: new Date(),
        nightActions: nextPhase === GamePhaseEnum.NIGHT ? '{}' : undefined,
        votes: nextPhase === GamePhaseEnum.VOTING ? '{}' : undefined,
      },
    });
  }

  /**
   * Update alive/dead players
   */
  async updatePlayerStatus(
    sessionId: number,
    deaths: number[],
  ): Promise<void> {
    const session = await prisma.gameSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      throw new Error('Game session not found');
    }

    const alivePlayers: number[] = JSON.parse(session.alivePlayers);
    const deadPlayers: number[] = JSON.parse(session.deadPlayers);

    for (const playerId of deaths) {
      const index = alivePlayers.indexOf(playerId);
      if (index > -1) {
        alivePlayers.splice(index, 1);
        deadPlayers.push(playerId);
      }
    }

    await prisma.gameSession.update({
      where: { id: sessionId },
      data: {
        alivePlayers: JSON.stringify(alivePlayers),
        deadPlayers: JSON.stringify(deadPlayers),
      },
    });
  }

  /**
   * Log game event
   */
  async logEvent(
    sessionId: number,
    phase: GamePhaseEnum,
    dayNumber: number,
    action: string,
    actorId: number | null,
    targetId: number | null,
    description: string,
  ): Promise<void> {
    await prisma.gameLog.create({
      data: {
        gameSessionId: sessionId,
        phase: phase as any, // cast to underlying Prisma enum (GamePhase)
        dayNumber,
        action,
        actorId,
        targetId,
        description,
      },
    });
  }
}

export default new GameManager();
