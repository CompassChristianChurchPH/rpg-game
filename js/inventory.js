// inventory.js

import { player } from './player.js';

export function usePotion() {
  if (player.inventory.potion > 0) {
    player.stats.hp += 20;
    if (player.stats.hp > 100) player.stats.hp = 100;
    player.inventory.potion--;
    log(`You used a potion. HP restored to ${player.stats.hp}.`);
  } else {
    log("No potions left!");
  }
}

function log(message) {
  const logDiv = document.getElementById("battle-log");
  logDiv.innerHTML = `<p>${message}</p>` + logDiv.innerHTML;
}
