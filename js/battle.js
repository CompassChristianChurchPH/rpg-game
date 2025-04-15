// battle.js
import { player } from './player.js';
import { log } from './utils.js';

let currentEnemy = null;

export function startBattle() {
  currentEnemy = { name: "Slime", hp: 30, attack: 5, exp: 10 };  // Example, you can add more enemies
  log(`A wild ${currentEnemy.name} appears with ${currentEnemy.hp} HP!`);
}

export function attackEnemy() {
  if (!currentEnemy) {
    log("No enemy to attack!");
    return;
  }

  currentEnemy.hp -= player.str; // Attack based on player's strength
  log(`You attacked ${currentEnemy.name} for ${player.str} damage.`);

  if (currentEnemy.hp <= 0) {
    log(`You defeated ${currentEnemy.name}! +${currentEnemy.exp} EXP`);
    player.exp += currentEnemy.exp;
    currentEnemy = null; // End battle
    return;
  }

  // Enemy attacks back
  player.hp -= currentEnemy.attack;
  log(`${currentEnemy.name} attacked you for ${currentEnemy.attack} damage.`);

  if (player.hp <= 0) {
    log("You were defeated! Game over.");
    player.hp = 0;
  }
}

// Handle skill usage
export function useSkill(skillName) {
  if (!currentEnemy) {
    log("No enemy to use skills on!");
    return;
  }

  const skill = player.skills.find(s => s.name === skillName);
  if (!skill) {
    log("Skill not found.");
    return;
  }

  // Apply skill effects
  if (skill.damage) {
    currentEnemy.hp -= skill.damage;
    log(`${player.class} used ${skill.name}! It dealt ${skill.damage} damage.`);
  }

  if (skill.effect) {
    log(`${player.class} used ${skill.name}. Effect: ${skill.effect}`);
  }

  if (currentEnemy.hp <= 0) {
    log(`${currentEnemy.name} was defeated!`);
    player.exp += currentEnemy.exp; // Add experience
    currentEnemy = null; // End battle
  }

  // Enemy attacks back after skill
  if (currentEnemy && player.hp > 0) {
    player.hp -= currentEnemy.attack;
    log(`${currentEnemy.name} attacks you for ${currentEnemy.attack} damage.`);
  }

  if (player.hp <= 0) {
    log("You were defeated! Game over.");
    player.hp = 0;
  }
}
