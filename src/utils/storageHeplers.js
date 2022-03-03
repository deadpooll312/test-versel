export function setStorage(key, value) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(key, value);
}

export function getStorageData(key) {
  if (typeof localStorage === 'undefined') return;
  if (localStorage.getItem(key) !== null) {
    return localStorage.getItem(key);
  }
}
