import { prisma } from '../prisma/client';
import { CharacterType } from '../src/lib/types';

async function createRoles() {
  const roles: CharacterType[] = [
    {
      name: 'Alpha Wolf',
      description:
        'A player who is the leader of the wolf team and can choose to eliminate one player each night. He has ability to convert a villager into a wolf.',
      avatar: '/images/characters/alphawolf.jpg',
    },
    {
      name: 'Cult Leader',
      description:
        'A player who is the leader of the cult and can choose to convert one player each night.',
      avatar: '/images/characters/cultleader.jpg',
    },
    {
      name: 'Cupid',
      description:
        'A player who is part of the villager team and can choose two players to fall in love with each other. If one of them dies, the other dies too.',
      avatar: '/images/characters/cupid.jpg',
    },
    {
      name: 'Doctor',
      description:
        'A player who is part of the villager team and can choose one player to protect each night.',
      avatar: '/images/characters/doctor.jpg',
    },
    {
      name: 'Fool',
      description:
        'A player who can see the role of one player each night but cannot be sure of their identity correctness.',
      avatar: '/images/characters/fool.jpg',
    },
    {
      name: 'Hunter',
      description:
        'A player who is part of the villager team and can eliminate one player when he is eliminated after the daylight discussion.',
      avatar: '/images/characters/hunter.jpg',
    },
    {
      name: 'Lovers',
      description:
        'A pair of players who are in love with each other. If one of them dies, the other dies too.',
      avatar: '/images/characters/lovers.jpg',
    },
    {
      name: 'Lycan',
      description:
        'A player who is part of the villager team but appears as a werewolf to the Seer.',
      avatar: '/images/characters/lycan.jpg',
    },
    {
      name: 'Mason',
      description:
        'A player who is part of the villager team and knows who the other Masons are. They can communicate with each other during the game. ',
      avatar: '/images/characters/mason.jpg',
    },
    {
      name: 'Mayor',
      description:
        'A player who is part of the villager team and has two votes during the daytime discussion. He can also reveal his role to the other players.',
      avatar: '/images/characters/mayor.jpg',
    },
    {
      name: 'Minion',
      description:
        'A player who is part of the wolf team and tries to protect the werewolves from being eliminated. He knows who the werewolves are.',
      avatar: '/images/characters/minion.jpg',
    },
    {
      name: 'Seer',
      description:
        'A player who is part of the villager team and can see the role of one player each night.',
      avatar: '/images/characters/seer.jpg',
    },
    {
      name: 'Sorcerer',
      description:
        'A player who is part of the wolf team helps werewolves by identifying the Seer.',
      avatar: '/images/characters/sorcerer.jpg',
    },
    {
      name: 'Tanner',
      description:
        'A player who is part of the villager team but wants to be eliminated. If he is eliminated, he wins the game.',
      avatar: '/images/characters/tanner.jpg',
    },
    {
      name: 'Villager',
      description:
        'A player who is part of the villager team tries to find and eliminate the werewolves throughout the discussion in the daylight.',
      avatar: '/images/characters/villager.jpg',
    },
    {
      name: 'Werewolf',
      description:
        'A player who is part of the wolf team tries to eliminate villagers during the midnight.',
      avatar: '/images/characters/werewolf.jpg',
    },
    {
      name: 'Witch',
      description:
        'A player who is part of the villager team and has two potions: one to save a player from being eliminated and another to eliminate a player.',
      avatar: '/images/characters/witch.jpg',
    },
  ];

  try {
    await prisma.roles.createMany({
      data: roles,
      skipDuplicates: true, // Skip if the role already exists
    });

    console.info('🟢 [DB:SEED] Successfully created roles in the database.');
  } catch (error) {
    console.error('🔴 [DB:SEED] Error creating roles data: ', error);
  }
}

createRoles();
