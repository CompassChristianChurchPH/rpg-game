// player.js

export function createPlayer(className) {
  const baseStats = {
    level: 1,
    exp: 0,
    inventory: [],
    skills: [],
  };

  switch (className) {
    case 'Knight':
      return {
        ...baseStats,
        class: 'Knight',
        hp: 150,
        maxHp: 150,
        mp: 30,
        maxMp: 30,
        str: 20,
        def: 15,
        agi: 5,
        int: 5,
        skills: ['Shield Bash', 'Taunt'],
      };
    case 'Mage':
      return {
        ...baseStats,
        class: 'Mage',
        hp: 80,
        maxHp: 80,
        mp: 100,
        maxMp: 100,
        str: 5,
        def: 5,
        agi: 10,
        int: 25,
        skills: ['Fireball', 'Ice Storm'],
      };
    case 'Rogue':
      return {
        ...baseStats,
        class: 'Rogue',
        hp: 100,
        maxHp: 100,
        mp: 50,
        maxMp: 50,
        str: 15,
        def: 10,
        agi: 20,
        int: 10,
        skills: ['Backstab', 'Smoke Bomb'],
      };
    default:
      return baseStats;
  }
}

export function getPlayerStats(player) {
  return {
    level: player.level,
    hp: player.hp,
    maxHp: player.maxHp,
    mp: player.mp,
    maxMp: player.maxMp,
    str: player.str,
    def: player.def,
    agi: player.agi,
    int: player.int,
  };
}
