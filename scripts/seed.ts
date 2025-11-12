import { prisma } from '../prisma/client';
import { Team, Prisma } from '../generated/prisma';
// CharacterType import removed: not used directly in seeding script

// Use enum strings consistent with Prisma enums (Team)

async function createRoles() {
  const roles: Prisma.rolesCreateInput[] = [
    {
      name: 'Alpha Wolf',
      description:
        'A player who is the leader of the wolf team and can choose to eliminate one player each night. He has ability to convert a villager into a wolf.',
      avatar: '/images/characters/alphawolf.jpg',
  team: Team.werewolf,
      priority: 5,
    },
    {
      name: 'Cult Leader',
      description:
        'A player who is the leader of the cult and can choose to convert one player each night.',
      avatar: '/images/characters/cultleader.jpg',
  team: Team.neutral,
      priority: 8,
    },
    {
      name: 'Cupid',
      description:
        'A player who is part of the villager team and can choose two players to fall in love with each other. If one of them dies, the other dies too.',
      avatar: '/images/characters/cupid.jpg',
  team: Team.villager,
      priority: 1,
    },
    {
      name: 'Doctor',
      description:
        'A player who is part of the villager team and can choose one player to protect each night.',
      avatar: '/images/characters/doctor.jpg',
  team: Team.villager,
      priority: 7,
    },
    {
      name: 'Fool',
      description:
        'A player who can see the role of one player each night but cannot be sure of their identity correctness.',
      avatar: '/images/characters/fool.jpg',
  team: Team.villager,
      priority: 4,
    },
    {
      name: 'Hunter',
      description:
        'A player who is part of the villager team and can eliminate one player when he is eliminated after the daylight discussion.',
      avatar: '/images/characters/hunter.jpg',
      team: 'villager',
      priority: 0,
    },
    {
      name: 'Lovers',
      description:
        'A pair of players who are in love with each other. If one of them dies, the other dies too.',
      avatar: '/images/characters/lovers.jpg',
  team: Team.neutral,
      priority: 0,
    },
    {
      name: 'Lycan',
      description:
        'A player who is part of the villager team but appears as a werewolf to the Seer.',
      avatar: '/images/characters/lycan.jpg',
  team: Team.villager,
      priority: 0,
    },
    {
      name: 'Mason',
      description:
        'A player who is part of the villager team and knows who the other Masons are. They can communicate with each other during the game. ',
      avatar: '/images/characters/mason.jpg',
  team: Team.villager,
      priority: 0,
    },
    {
      name: 'Mayor',
      description:
        'A player who is part of the villager team and has two votes during the daytime discussion. He can also reveal his role to the other players.',
      avatar: '/images/characters/mayor.jpg',
  team: Team.villager,
      priority: 0,
    },
    {
      name: 'Minion',
      description:
        'A player who is part of the wolf team and tries to protect the werewolves from being eliminated. He knows who the werewolves are.',
      avatar: '/images/characters/minion.jpg',
  team: Team.werewolf,
      priority: 0,
    },
    {
      name: 'Seer',
      description:
        'A player who is part of the villager team and can see the role of one player each night.',
      avatar: '/images/characters/seer.jpg',
  team: Team.villager,
      priority: 3,
    },
    {
      name: 'Sorcerer',
      description:
        'A player who is part of the wolf team helps werewolves by identifying the Seer.',
      avatar: '/images/characters/sorcerer.jpg',
  team: Team.werewolf,
      priority: 4,
    },
    {
      name: 'Tanner',
      description:
        'A player who is part of the villager team but wants to be eliminated. If he is eliminated, he wins the game.',
      avatar: '/images/characters/tanner.jpg',
  team: Team.neutral,
      priority: 0,
    },
    {
      name: 'Villager',
      description:
        'A player who is part of the villager team tries to find and eliminate the werewolves throughout the discussion in the daylight.',
      avatar: '/images/characters/villager.jpg',
  team: Team.villager,
      priority: 0,
    },
    {
      name: 'Werewolf',
      description:
        'A player who is part of the wolf team tries to eliminate villagers during the midnight.',
      avatar: '/images/characters/werewolf.jpg',
  team: Team.werewolf,
      priority: 6,
    },
    {
      name: 'Witch',
      description:
        'A player who is part of the villager team and has two potions: one to save a player from being eliminated and another to eliminate a player.',
      avatar: '/images/characters/witch.jpg',
  team: Team.villager,
      priority: 9,
    },
  ];

  try {
    for (const role of roles) {
      await prisma.roles.upsert({
        where: { name: role.name },
        update: role,
        create: role,
      });
    }
    console.info('🟢 [DB:SEED] Roles upserted successfully.');
  } catch (error) {
    console.error('🔴 [DB:SEED] Error upserting roles: ', error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

createRoles();
