// @flow strict

function get(key: string): ?string {
  let value = null;
  try {
    value = global.localStorage.getItem(key);
  } catch (error) {
    throw new Error('localStorage not accessible');
  }
  return value;
}

function set(key: string, value: string): void {
  try {
    global.localStorage.setItem(key, value);
  } catch (error) {
    throw new Error('localStorage not accessible');
  }
}

function remove(key: string): void {
  try {
    global.localStorage.removeItem(key);
  } catch (error) {
    throw new Error('localStorage not accessible');
  }
}

function