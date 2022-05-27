
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