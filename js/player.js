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

export function useSkill(skillName) {
  switch (skillName) {
    case 'Shield Bash':
      return useShieldBash();
    case 'Fireball':
      return useFireball();
    case 'Backstab':
      return useBackstab();
    case 'Taunt':
      return useTaunt();
    case 'Ice Storm':
      return useIceStorm();
    case 'Smoke Bomb':
      return useSmokeBomb();
    default:
      console.log("Skill not found");
      return;
  }
}

function useShieldBash() {
  if (player.mp >= 10) {
    player.mp -= 10;
    log("You used Shield Bash! Enemy defense reduced.");
    // Apply effect to enemy (e.g., reduce enemy defense or damage dealt)
  } else {
    log("Not enough MP for Shield Bash!");
  }
}

function useFireball() {
  if (player.mp >= 20) {
    player.mp -= 20;
    log("You cast Fireball! Enemy takes fire damage.");
    // Apply fireball damage to enemy
  } else {
    log("Not enough MP for Fireball!");
  }
}

function useBackstab() {
  if (player.mp >= 15) {
    player.mp -= 15;
    log("You performed Backstab! High damage to enemy.");
    // Apply backstab damage
  } else {
    log("Not enough MP for Backstab!");
  }
}

function useTaunt() {
  if (player.mp >= 5) {
    player.mp -= 5;
    log("You used Taunt! Enemy attacks you with less damage.");
    // Apply taunt effect (e.g., reduce enemy damage or attract enemy attention)
  } else {
    log("Not enough MP for Taunt!");
  }
}

function useIceStorm() {
  if (player.mp >= 25) {
    player.mp -= 25;
    log("You cast Ice Storm! Enemies are slowed.");
    // Apply ice storm effect (e.g., slow enemy or area effect)
  } else {
    log("Not enough MP for Ice Storm!");
  }
}

function useSmokeBomb() {
  if (player.mp >= 10) {
    player.mp -= 10;
    log("You used Smoke Bomb! You evaded the next attack.");
    // Apply evasion effect (e.g., enemy misses next attack)
  } else {
    log("Not enough MP for Smoke Bomb!");
  }
}

function log(message) {
  const logDiv = document.getElementById("battle-log");
  logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
}
