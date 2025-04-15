// inventory.js

import { player } from './player.js';
import { saveGame } from './storage.js';

const inventory = {
  potion: 3
};

export function usePotion() {
  if (inventory.potion > 0) {
    const heal = 20;
    player.stats.hp += heal;
    inventory.potion--;
    document.getElementById("battle-log").innerHTML += `<br>You used a potion and healed ${heal} HP!`;
    saveGame();
  } else {
    document.getElementById("battle-log").innerHTML += `<br>No potions left!`;
  }
}

export function showInventory() {
  return inventory;
}
