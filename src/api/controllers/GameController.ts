import { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import { prisma } from '../../../prisma/client';
import { PlayerType } from '../../lib/types';
import { GamePhaseEnum } from '../../lib/enums';
import { GamePhase } from '../../../generated/prisma';
import gameManager from '../services/GameManager';

export default class GameController {
  /**
   * Start a new game session
   */
  static async start(req: Request, res: Response) {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: errors[0].msg,
      });
      return;
    }

    const body = matchedData(req);

    try {
      const room = await prisma.rooms.findUnique({
        where: { id: body.roomId },
      });

      if (!room) {
        res.json({
          success: false,
          message: 'Room not found.',
        });
        return;
      }

      if (room.gameStarted) {
        res.json({
          success: false,
          message: 'Game already started.',
        });
        return;
      }

      const players: PlayerType[] = JSON.parse(room.players);

      // Check if all slots are filled
      const emptySlots = players.filter((p) => p.name === null);
      if (emptySlots.length > 0) {
        res.json({
          success: false,
          message: 'Not all player slots are filled.',
        });
        return;
      }

      // Shuffle roles
      const shuffledRoles = [...players.map((p) => p.role)].sort(
        () => Math.random() - 0.5,
      );
      const updatedPlayers = players.map((p, index) => ({
        ...p,
        role: shuffledRoles[index],
        isAlive: true,
      }));

      // Create game session
      const alivePlayers = updatedPlayers.map((_, index) => index);
      const gameSession = await prisma.gameSession.create({
        data: {
          roomId: room.id,
          phase: GamePhaseEnum.NIGHT as unknown as GamePhase,
          dayNumber: 1,
          timeRemaining: room.timerLimit,
          alivePlayers: JSON.stringify(alivePlayers),
          deadPlayers: JSON.stringify([]),
          votes: JSON.stringify({}),
          nightActions: JSON.stringify({}),
        },
      });

      // Update room
      await prisma.rooms.update({
        where: { id: room.id },
        data: {
          players: JSON.stringify(updatedPlayers),
          gameStarted: true,
        },
      });

      // Log game start
      await gameManager.logEvent(
        gameSession.id,
        GamePhaseEnum.NIGHT,
        1,
        'game_started',
        null,
        null,
        'Game has begun! Night 1 starts.',
      );

      res.json({
        success: true,
        message: 'Game started successfully.',
        data: {
          sessionId: gameSession.id,
          phase: gameSession.phase,
          dayNumber: gameSession.dayNumber,
          players: updatedPlayers,
        },
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to start game.',
      });
    }
  }

  /**
   * Submit a night action
   */
  static async submitAction(req: Request, res: Response) {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: errors[0].msg,
      });
      return;
    }

    const body = matchedData(req);

    try {
      const session = await prisma.gameSession.findUnique({
        where: { id: body.sessionId },
        include: { room: true },
      });

      if (!session) {
        res.json({
          success: false,
          message: 'Game session not found.',
        });
        return;
      }

  if (session.phase !== (GamePhaseEnum.NIGHT as unknown as GamePhase)) {
        res.json({
          success: false,
          message: 'Not in night phase.',
        });
        return;
      }

      const nightActions = JSON.parse(session.nightActions);
      nightActions[body.playerId] = {
        action: body.action,
        target: body.targetId,
      };

      await prisma.gameSession.update({
        where: { id: body.sessionId },
        data: {
          nightActions: JSON.stringify(nightActions),
        },
      });

      res.json({
        success: true,
        message: 'Action submitted successfully.',
        data: { actionSubmitted: true },
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to submit action.',
      });
    }
  }

  /**
   * Submit a vote
   */
  static async submitVote(req: Request, res: Response) {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: errors[0].msg,
      });
      return;
    }

    const body = matchedData(req);

    try {
      const session = await prisma.gameSession.findUnique({
        where: { id: body.sessionId },
      });

      if (!session) {
        res.json({
          success: false,
          message: 'Game session not found.',
        });
        return;
      }

  if (session.phase !== (GamePhaseEnum.VOTING as unknown as GamePhase)) {
        res.json({
          success: false,
          message: 'Not in voting phase.',
        });
        return;
      }

      const votes = JSON.parse(session.votes);
      votes[body.playerId] = body.targetId;

      await prisma.gameSession.update({
        where: { id: body.sessionId },
        data: {
          votes: JSON.stringify(votes),
        },
      });

      res.json({
        success: true,
        message: 'Vote submitted successfully.',
        data: { voteSubmitted: true },
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to submit vote.',
      });
    }
  }

  /**
   * Get current game state
   */
  static async getState(req: Request, res: Response) {
    try {
      const { roomId } = req.params;

      const room = await prisma.rooms.findFirst({
        where: {
          OR: [{ id: parseInt(roomId, 10) || -1 }, { roomCode: roomId }],
        },
      });

      if (!room) {
        res.status(404).json({
          success: false,
          message: 'Room not found.',
        });
        return;
      }

      const session = await prisma.gameSession.findFirst({
        where: { roomId: room.id },
        orderBy: { createdAt: 'desc' },
      });

      if (!session) {
        res.json({
          success: true,
          message: 'No active game session.',
          data: null,
        });
        return;
      }

      const logs = await prisma.gameLog.findMany({
        where: { gameSessionId: session.id },
        orderBy: { timestamp: 'desc' },
        take: 20,
      });

      res.json({
        success: true,
        message: 'Game state retrieved.',
        data: {
          session: {
            ...session,
            alivePlayers: JSON.parse(session.alivePlayers),
            deadPlayers: JSON.parse(session.deadPlayers),
            votes: JSON.parse(session.votes),
            nightActions: JSON.parse(session.nightActions),
          },
          room: {
            ...room,
            players: JSON.parse(room.players),
          },
          logs,
        },
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to get game state.',
      });
    }
  }

  /**
   * Process phase transition
   */
  static async processPhase(req: Request, res: Response) {
    const errors = validationResult(req).array();

    if (errors.length > 0) {
      res.json({
        success: false,
        message: errors[0].msg,
      });
      return;
    }

    const body = matchedData(req);

    try {
      const session = await prisma.gameSession.findUnique({
        where: { id: body.sessionId },
        include: { room: true },
      });

      if (!session) {
        res.json({
          success: false,
          message: 'Game session not found.',
        });
        return;
      }

  const currentPhase = session.phase as unknown as GamePhaseEnum;
      let nextPhase: GamePhaseEnum;
      let deaths: number[] = [];
      let eliminated: number | null = null;

      // Process current phase
  if (currentPhase === GamePhaseEnum.NIGHT) {
        // Process night actions
        const result = await gameManager.processNightActions(session.id);
        deaths = result.deaths;

        // Log deaths
        for (const playerId of deaths) {
          await gameManager.logEvent(
            session.id,
            GamePhaseEnum.NIGHT,
            session.dayNumber,
            'death',
            null,
            playerId,
            `Player ${playerId + 1} was killed during the night.`,
          );
        }

        await gameManager.updatePlayerStatus(session.id, deaths);
        nextPhase = GamePhaseEnum.DAY;
      } else if (currentPhase === GamePhaseEnum.DAY) {
        nextPhase = GamePhaseEnum.VOTING;
      } else if (currentPhase === GamePhaseEnum.VOTING) {
        // Process votes
        eliminated = await gameManager.processVoting(session.id);

        if (eliminated !== null) {
          await gameManager.logEvent(
            session.id,
            GamePhaseEnum.VOTING,
            session.dayNumber,
            'elimination',
            null,
            eliminated,
            `Player ${eliminated + 1} was voted out.`,
          );
          await gameManager.updatePlayerStatus(session.id, [eliminated]);
        }

        nextPhase = GamePhaseEnum.NIGHT;
      } else {
        res.json({
          success: false,
          message: 'Invalid phase transition.',
        });
        return;
      }

      // Check win condition
      const winner = await gameManager.checkWinCondition(session.id);

      if (winner) {
        await prisma.gameSession.update({
          where: { id: session.id },
          data: { phase: GamePhaseEnum.ENDED as unknown as GamePhase },
        });

        await gameManager.logEvent(
          session.id,
          GamePhaseEnum.ENDED,
          session.dayNumber,
          'game_ended',
          null,
          null,
          `${winner === 'villager' ? 'Villagers' : 'Werewolves'} win!`,
        );

        res.json({
          success: true,
          message: 'Game ended.',
          data: {
            phase: GamePhaseEnum.ENDED,
            winner,
            deaths,
            eliminated,
          },
        });
        return;
      }

      // Transition to next phase
      await gameManager.transitionPhase(session.id, nextPhase);

      res.json({
        success: true,
        message: 'Phase processed successfully.',
        data: {
          phase: nextPhase,
          deaths,
          eliminated,
          winner: null,
        },
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to process phase.',
      });
    }
  }
}
