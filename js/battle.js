// battle.js

import { player } from './player.js';
import { saveGame } from './storage.js';

export const enemy = {
  name: "Goblin",
  hp: 50,
  attack: 8,
};

export function startBattle() {
  const battleLog = document.getElementById("battle-log");
  battleLog.innerHTML = `A wild ${enemy.name} appears!`;

  document.getElementById("attack-btn").onclick = () => {
    playerAttack(battleLog);
  };
}

function playerAttack(log) {
  const damage = Math.floor(Math.random() * player.stats.attack + 1);
  enemy.hp -= damage;
  log.innerHTML += `<br>You dealt ${damage} damage to ${enemy.name}.`;

  if (enemy.hp <= 0) {
    log.innerHTML += `<br>You defeated the ${enemy.name}!`;
    player.stats.exp += 10;
    saveGame();
    return;
  }

  enemyAttack(log);
}

function enemyAttack(log) {
  const damage = Math.floor(Math.random() * enemy.attack + 1);
  player.stats.hp -= damage;
  log.innerHTML += `<br>${enemy.name} dealt ${damage} damage to you.`;

  if (player.stats.hp <= 0) {
    log.innerHTML += `<br>You were defeated. Game over!`;
  }
}
