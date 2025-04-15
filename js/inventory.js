// inventory.js

import { player } from './player.js';

const inventory = {
  potion: 3
};

export function usePotion() {
  if (inventory.potion > 0 && player.stats.hp < 100) {
    player.stats.hp = Math.min(player.stats.hp + 30, 100);
    inventory.potion--;
    log(`You used a potion. HP restored to ${player.stats.hp}.`);
  } else {
    log("No potions left or HP already full.");
  }
}

export function showInventory() {
  return inventory;
}

function log(message) {
  const logDiv = document.getElementById("battle-log");
  logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
}
