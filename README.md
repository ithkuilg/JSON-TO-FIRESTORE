
# versioned-storage [![Node.js CI](https://github.com/CatChen/versioned-storage/workflows/Node.js%20CI/badge.svg)](https://github.com/CatChen/versioned-storage/actions) [![codecov](https://codecov.io/gh/CatChen/versioned-storage/branch/master/graph/badge.svg)](https://codecov.io/gh/CatChen/versioned-storage)

Use named, versioned and typed ([TypeScript](https://www.typescriptlang.org/) and [Flow](https://flow.org/)) JSON storage through `localStorage`!

## Examples

Create a named and versioned storage by creating a `Storage` object. Use `Storage.prototype.write` and `Storage.prototype.read` to operate.

```
import Storage from 'versioned-storage';

const userStorage = new Storage('user', 1);
userStorage.write({
  id: 42,