// main.js
import { createPlayer, getPlayerStats } from './player.js';
import { saveGameData } from './storage.js';

let player = null;

window.startGame = function (className) {
  player = createPlayer(className);
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-ui').style.display = 'block';
  updatePlayerStats();
};

window.attack = function () {
  const log = document.getElementById('battle-log');
  log.innerHTML += `<p>You attack the enemy! ⚔️</p>`;
};

window.useSkill = function () {
  const log = document.getElementById('battle-log');
  log.innerHTML += `<p>You used a skill! ✨</p>`;
};

window.useItem = function () {
  const log = document.getElementById('battle-log');
  log.innerHTML += `<p>You used an item! 🧪</p>`;
};

window.saveGame = function () {
  saveGameData(player);
  alert("Game saved!");
};

function updatePlayerStats() {
  const statsDiv = document.getElementById('player-stats');
  const stats = getPlayerStats(player);
  statsDiv.innerHTML = `
    <strong>${player.class} - Level ${player.level}</strong><br>
    HP: ${player.hp} / ${player.maxHp} <br>
    MP: ${player.mp} / ${player.maxMp} <br>
    STR: ${player.str} | DEF: ${player.def} <br>
    AGI: ${player.agi} | INT: ${player.int}
  `;
}
