// main.js

import { player, setPlayerName, levelUp } from './player.js';
import { startBattle, attackEnemy } from './battle.js';
import { usePotion, showInventory } from './inventory.js';
import { saveGame, loadGame } from './storage.js';

function initGame() {
  const savedData = loadGame();
  if (savedData) {
    Object.assign(player, savedData);
    log(`Welcome back, ${player.name}!`);
  } else {
    const name = prompt("Enter your character's name:");
    setPlayerName(name || "Hero");
    log(`Welcome, ${player.name}! Let the adventure begin.`);
  }

  updateUI();
}

function updateUI() {
  document.getElementById("player-name").textContent = player.name;
  document.getElementById("player-level").textContent = player.level;
  document.getElementById("player-hp").textContent = player.stats.hp;
  document.getElementById("player-attack").textContent = player.stats.attack;
  document.getElementById("player-exp").textContent = `${player.exp} / ${player.nextExp}`;

  const inv = showInventory();
  document.getElementById("player-inventory").textContent = `Potion x${inv.potion}`;
}

function log(message) {
  const logDiv = document.getElementById("battle-log");
  logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
}

document.getElementById("start-btn").addEventListener("click", () => {
  startBattle();
});

document.getElementById("attack-btn").addEventListener("click", () => {
  attackEnemy();
  updateUI();
});

document.getElementById("use-potion-btn").addEventListener("click", () => {
  usePotion();
  updateUI();
});

document.getElementById("save-btn").addEventListener("click", () => {
  saveGame();
  log("Game saved!");
});

document.getElementById("load-btn").addEventListener("click", () => {
  initGame();
  updateUI();
});

window.onload = () => {
  initGame();
};
