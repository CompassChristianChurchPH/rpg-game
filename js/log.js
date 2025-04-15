// log.js
export function logMessage(message) {
  const logDiv = document.getElementById("battle-log");
  const p = document.createElement("p");
  p.textContent = message;
  logDiv.prepend(p);
}
