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

function set(key: string, va