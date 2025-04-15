// storage.js

const STORAGE_KEY = 'elarion-save';

export function saveGameData(playerData) {
  try {
    const data = JSON.stringify(playerData);
    localStorage.setItem(STORAGE_KEY, data);
  } catch (error) {
    console.error('Save failed:', error);
  }
}

export function loadGameData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Load failed:', error);
    return null;
  }
}

export function clearGameData() {
  localStorage.removeItem(STORAGE_KEY);
}
