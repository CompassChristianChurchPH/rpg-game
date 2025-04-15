import { player, setPlayerName, levelUp, useSkill } from './player.js';
import { startBattle, attackEnemy, skillAttack } from './battle.js';
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
  document.getElementById("player-hp").textContent = player.hp;
  document.getElementById("player-mp").textContent = player.mp;
  document.getElementById("player-attack").textContent = player.attack;
  document.getElementById("player-exp").textContent = `${player.exp} / ${player.nextExp}`;

  const inv = showInventory();
  document.getElementById("player-inventory").textContent = `Potion x${inv.potion}`;
}

function log(message) {
  const logDiv = document.getElementById("battle-log");
  logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
}

// Event listeners for buttons
document.getElementById("start-btn").addEventListener("click", () => {
  startBattle();
  log("Battle started!");
});

document.getElementById("attack-btn").addEventListener("click", () => {
  attackEnemy();
  updateUI();
});

document.getElementById("use-potion-btn").addEventListener("click", () => {
  usePotion();
  updateUI();
});

// Event listeners for skill buttons
document.getElementById("shield-bash-btn").addEventListener("click", () => {
  useSkill("Shield Bash");
  updateUI();
});

document.getElementById("fireball-btn").addEventListener("click", () => {
  useSkill("Fireball");
  updateUI();
});

document.getElementById("backstab-btn").addEventListener("click", () => {
  useSkill("Backstab");
  updateUI();
});

document.getElementById("taunt-btn").addEventListener("click", () => {
  useSkill("Taunt");
  updateUI();
});

document.getElementById("ice-storm-btn").addEventListener("click", () => {
  useSkill("Ice Storm");
  updateUI();
});

document.getElementById("smoke-bomb-btn").addEventListener("click", () => {
  useSkill("Smoke Bomb");
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
