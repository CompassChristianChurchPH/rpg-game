// main.js
import { createPlayer, getPlayerStats } from './player.js';
import { saveGameData } from './storage.js';

let player = null;
let enemy = null;

window.startGame = function (className) {
  player = createPlayer(className);
  enemy = generateEnemy();
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-ui').style.display = 'block';
  updateUI();
};

function generateEnemy() {
  return {
    name: 'Goblin',
    hp: 50,
    str: 10,
  };
}

window.attack = function () {
  const log = document.getElementById('battle-log');
  const damage = Math.max(player.str - 3, 5);
  enemy.hp -= damage;
  log.innerHTML += `<p>You attack the ${enemy.name} for ${damage} damage! ⚔️</p>`;
  checkBattleState();
};

window.useSkill = function () {
  if (player.mp < 10) {
    alert('Not enough MP!');
    return;
  }
  const log = document.getElementById('battle-log');
  const damage = Math.max(player.int * 2, 15);
  enemy.hp -= damage;
  player.mp -= 10;
  log.innerHTML += `<p>You used a skill and dealt ${damage} magic damage! ✨</p>`;
  checkBattleState();
};

window.useItem = function () {
  const log = document.getElementById('battle-log');
  if (player.hp < player.maxHp) {
    player.hp = Math.min(player.maxHp, player.hp + 30);
    log.innerHTML += `<p>You used a health potion and recovered 30 HP. 🧪</p>`;
  } else {
    log.innerHTML += `<p>Your HP is already full.</p>`;
  }
  enemyTurn();
};

function enemyTurn() {
  if (enemy.hp > 0) {
    const damage = Math.max(enemy.str - player.def / 2, 3);
    player.hp -= damage;
    const log = document.getElementById('battle-log');
    log.innerHTML += `<p>The ${enemy.name} hits you for ${damage} damage! 💢</p>`;
    checkBattleState();
  }
}

function checkBattleState() {
  if (enemy.hp <= 0) {
    const log = document.getElementById('battle-log');
    log.innerHTML += `<p>🎉 You defeated the ${enemy.name}!</p>`;
    gainExperience(75);
    document.getElementById('actions').style.display = 'none';
  } else if (player.hp <= 0) {
    document.getElementById('battle-log').innerHTML += `<p>💀 You have been defeated...</p>`;
    document.getElementById('actions').style.display = 'none';
  } else {
    enemyTurn();
  }
  updateUI();
}

function gainExperience(amount) {
  player.exp += amount;
  const log = document.getElementById('battle-log');
  log.innerHTML += `<p>📈 You gained ${amount} XP!</p>`;

  const neededXP = player.level * 100;
  if (player.exp >= neededXP) {
    player.exp -= neededXP;
    player.level++;
    player.maxHp += 20;
    player.hp = player.maxHp;
    player.maxMp += 10;
    player.mp = player.maxMp;
    player.str += 2;
    player.def += 2;
    player.agi += 1;
    player.int += 1;
    log.innerHTML += `<p>🆙 Level Up! You are now Level ${player.level}!</p>`;
  }
}

function updateUI() {
  const stats = getPlayerStats(player);
  document.getElementById('player-stats').innerHTML = `
    <strong>${player.class} - Level ${player.level}</strong><br>
    HP: ${player.hp} / ${player.maxHp} <br>
    MP: ${player.mp} / ${player.maxMp} <br>
    STR: ${player.str} | DEF: ${player.def} <br>
    AGI: ${player.agi} | INT: ${player.int} <br>
    XP: ${player.exp} / ${player.level * 100} <br>
  `;
}

window.saveGame = function () {
  saveGameData(player);
  alert('Game saved!');
};
