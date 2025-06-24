async function createRoles() {
  const roles = [
    {
      name: 'Werewolf',
      description:
        'A player who is part of the wolf team tries to eliminate villagers during the midnight.',
      image: '/images/characters/werewolf.jpg',
    },
    {
      name: 'Villager',
      description:
        'A player who is part of the villager team tries to find and eliminate the werewolves throughout the discussion in the daylight.',
      image: '/images/characters/villager.jpg',
    },
    {
      name: 'Seer',
      description:
        'A player who is part of the villager team and can see the role of one player each night.',
      image: '/images/characters/seer.jpg',
    },
    {
      name: 'Hunter',
      description:
        'A player who is part of the villager team and can eliminate one player if they are eliminated.',
      image: '/images/characters/hunter.jpg',
    },
  ];
}

createRoles();
