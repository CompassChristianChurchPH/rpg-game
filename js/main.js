// main.js

import { initPlayer, player } from './player.js';
import { loadGame, saveGame } from './storage.js';
import { startBattle } from './battle.js';
import { usePotion, showInventory } from './inventory.js';

function updateUI() {
  document.getElementById("player-name").textContent = player.name;
  document.getElementById("player-class").textContent = player.class;
  document.getElementById("player-level").textContent = player.stats.level;
  document.getElementById("player-hp").textContent = player.stats.hp;
  document.getElementById("player-attack").textContent = player.stats.attack;
  document.getElementById("player-exp").textContent = player.stats.exp;

  const inventory = showInventory();
  document.getElementById("inventory-display").innerHTML = `Potions: ${inventory.potion}`;
}

window.onload = () => {
  initPlayer();
  loadGame();
  updateUI();

  document.getElementById("start-btn").onclick = () => {
    startBattle();
    updateUI();
  };

  document.getElementById("attack-btn").onclick = () => {
    // Attack logic is handled in battle.js, so just update UI
    updateUI();
  };

  document.getElementById("potion-btn").onclick = () => {
    usePotion();
    updateUI();
  };
};
