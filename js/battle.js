// battle.js

import { player, gainExp } from './player.js';

const enemies = [
  { name: "Slime", hp: 30, attack: 5, exp: 10 },
  { name: "Goblin", hp: 50, attack: 10, exp: 20 },
  { name: "Wolf", hp: 70, attack: 15, exp: 30 }
];

let currentEnemy = null;

export function startBattle() {
  currentEnemy = { ...enemies[Math.floor(Math.random() * enemies.length)] };
  log(`A wild ${currentEnemy.name} appears with ${currentEnemy.hp} HP!`);
}

export function attackEnemy() {
  if (!currentEnemy) {
    log("No enemy to attack!");
    return;
  }

  currentEnemy.hp -= player.stats.attack;
  log(`You attacked ${currentEnemy.name} for ${player.stats.attack} damage.`);

  if (currentEnemy.hp <= 0) {
    log(`You defeated ${currentEnemy.name}! +${currentEnemy.exp} EXP`);
    gainExp(currentEnemy.exp);
    currentEnemy = null;
    return;
  }

  // Enemy attacks back
  player.stats.hp -= currentEnemy.attack;
  log(`${currentEnemy.name} attacked you for ${currentEnemy.attack} damage.`);

  if (player.stats.hp <= 0) {
    log("You were defeated! Game over.");
    player.stats.hp = 0;
  }
}

function log(message) {
  const logDiv = document.getElementById("battle-log");
  logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
}
