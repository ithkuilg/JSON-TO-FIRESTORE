
const Storage = require('../Storage');

const STORAGE_NAME = 'test_storage';
const STORAGE_VERSION = 42;
const TEST_OBJECT = {
  x: 1,
  y: ['hello', 'world'],
  z: false,
};

let localStorageBackup = null;
let getItem = jest.fn();
let setItem = jest.fn();
let removeItem = jest.fn();
let clear = jest.fn();

beforeEach(() => {
  getItem = jest.fn();
  setItem = jest.fn();
  removeItem = jest.fn();
  clear = jest.fn();
  const localStorageMock = {
    getItem,
    setItem,
    removeItem,
    clear,
  };
  localStorageBackup = global.localStorage;
  Object.defineProperty(global, 'localStorage', {
    writable: true,
  });
  global.localStorage = localStorageMock;
});

afterEach(() => {
  global.localStorage = localStorageBackup;
});

it('accepts name and version in constructor', () => {
  const storage = new Storage(STORAGE_NAME, STORAGE_VERSION);
  expect(storage.name).toBe(STORAGE_NAME);
  expect(storage.version).toBe(STORAGE_VERSION);
});

it('stores version number', () => {
  const storage = new Storage(STORAGE_NAME, STORAGE_VERSION);
  expect(setItem.mock.calls.length).toBe(1);
  expect(setItem.mock.calls[0].length).toBe(2);
  expect(setItem.mock.calls[0][0]).toBe(STORAGE_NAME);
  expect(setItem.mock.calls[0][1]).toBe(STORAGE_VERSION.toString());
});

it('can write object to storage', () => {
  const storage = new Storage(STORAGE_NAME, STORAGE_VERSION);
  storage.write(TEST_OBJECT);
  expect(setItem.mock.calls.length).toBe(2);