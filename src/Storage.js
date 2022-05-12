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

function clear(): void {
  try {
    global.localStorage.clear();
  } catch (error) {
    throw new Error('localStorage not accessible');
  }
}

class Storage<T> {
  name: string;
  version: number;

  constructor(name: string, version?: number) {
    if (version) {
      const parsedVersion = parseInt(version, 10);
      if (!parsedVersion || parsedVersion <= 0) {
        throw new Error('version has to be a positive integer');
      }
      this.name = name;
      this.version = parsedVersion;

      const previousVersion = parseInt(get(name), 10) || 0;
      if (parsedVersion > previousVersion) {
        remove(`${name}:${previousVersion}`);
        set(name, version.toString(10));
      }
    } else {
      const existingVersion = parseInt(get(name), 10) || 0;
      if (!existingVersion) {
        throw new Error(`There is no existing storage named ${name}`);
      }
      this.name = name;
      this.version = existingVersion;
    }
  }

  read(): ?T {
    con